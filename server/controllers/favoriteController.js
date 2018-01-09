module.exports = { 
    getFavorite: (req, res, next) => {
        const db  = req.app.get('db');
        const {params} = req;

        db
            .get_favorite_recipes([params.id])
            .then(favorite => res.status(200).json(favorite))
            .catch(console.log);
    }
}