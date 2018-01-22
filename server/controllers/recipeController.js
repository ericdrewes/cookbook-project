module.exports = {
  create: (req, res, next) => {
    const db = req.app.get("db");
    const { recipe_name, description, img } = req.body;
    console.log(req.user);
    db
      .create_recipe({ authid: req.user.authid, recipe_name, description, img })
      .then(() => res.status(200).json())
      .catch(console.log);
  },

  getRecipes: (req, res, next) => {
    const db = req.app.get("db");

    db
      .read_recipes()
      .then(recipes => res.status(200).json(product))
      .catch(console.log);
  },

  
};
