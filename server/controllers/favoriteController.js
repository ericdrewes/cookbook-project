module.exports = {
  getFavorite: (req, res, next) => {
    const db = req.app.get("db");
    const { params } = req;

    console.log(params);
    db
      .get_favorite_recipes([req.user.authid])
      .then(favorite => res.status(200).json(favorite))
      .catch(console.log);
  },

  saveFavorite: (req, res, next) => {
    const db = req.app.get("db");
    const { id, img, name } = req.body;
    let data = { ...req.body, userid: req.user.authid };
    console.log(data);

    db
      .save_favorite_recipes(data)
      .then(favorite => res.status(200).json(favorite))
      .catch(console.log);
  }
};
