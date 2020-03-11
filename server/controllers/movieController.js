module.exports = {
  getFavorites: (req, res) => {
    const db = req.app.get("db")
    const { user_id } = req.session.user
    db.movie
    .get_favorites(user_id)
    .then(results => {
      return res.status(200).send(results)
    })
    .catch(err => res.status(500).send(err))
  },
  addFavorite: (req, res) => {
    const db = req.app.get("db")
    const { user_id } = req.session.user
    const { name, image, rating, external_id } = req.body
    const category_id = 1
    db.movie
      .add_favorite({
        user_id,
        category_id,
        name,
        image,
        rating,
        external_id
      })
      .then(results => res.status(200).send(results))
      .catch(err => res.status(500).send(err))
  },
  deleteFavorite: (req, res) => {
    const db = req.app.get("db")
    const { user_id } = req.session.user
    const { movie_id } = req.params
    db.movie
      .delete_favorite(user_id, movie_id)
      .then(results => res.status(200).send(results))
      .catch(err => res.status(500).send(err))
  }
}
