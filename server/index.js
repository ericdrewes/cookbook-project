require("dotenv").config();
const express = require("express");
const { json } = require("body-parser");
const cors = require("cors");
const session = require("express-session");
const massive = require("massive");
const passport = require("passport");
const Auth0Strategy = require("passport-auth0");
const recipeController = require("./controllers/recipeController");
const favoriteController = require("./controllers/favoriteController");

massive(process.env.CONNECTION_STRING)
  .then(db => {
    app.set("db", db);
  })
  .catch(console.log);

const app = express();

app.use(json());
app.use(cors());
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 100000 * 60 * 1000
    }
  })
);

app.use(passport.initialize());
app.use(passport.session());

passport.use(
  new Auth0Strategy(
    {
      domain: process.env.AUTH_DOMAIN,
      clientSecret: process.env.CLIENT_SECRET,
      clientID: process.env.CLIENT_ID,
      callbackURL: "/login"
    },
    (accessToken, refreshToken, extraParams, profile, done) => {
      app
        .get("db")
        .getUserByAuthId(profile.id)
        .then(response => {
          if (!response[0]) {
            app
              .get("db")
              .createUserByAuthId([profile.id, profile.displayName])
              .then(created => {
                return done(null, created[0]);
              });
          } else {
            return done(null, response[0]);
          }
        });
      // return done(null, profile);
    }
  )

  
);



passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((user, done) => done(null, user));

app.get(
  "/login",
  passport.authenticate("auth0", {
    successRedirect: "http://localhost:3000/",
    failureRedirect: "http://localhost:3001/login"
  })
);


app.get("/api/me", (req, res, next) => {
  if (req.user) res.json(req.user);
  else res.redirect("/auth");
});

app.get("/api/test", (req, res) => {
  const db = app.get("db");

  db.products
    .find({})
    .then(response => {
      console.log("backend");
      res.json(response);
    })
    .catch(console.log);
});

app.post("/api/addrecipe", recipeController.create);
app.get("/api/test", recipeController.getRecipes);
app.get("/api/favorites", favoriteController.getFavorite);
app.get("/api/readspecific/:id", favoriteController.readSpecific);
app.post("/api/favorites", favoriteController.saveFavorite);
app.delete("/api/favorites/:id", favoriteController.deleteFavorite);
app.get("/api/checkAuth", (req, res) => res.json(req.user));
app.get("/logout", (req, res) => res.json(req.session.destroy()));



app.listen(process.env.PORT || 3001, () => {
  console.log(`Listening on port: ${process.env.PORT || 3001}`);
});
