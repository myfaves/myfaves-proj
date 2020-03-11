module.exports = {
  getFavorites: (req, res) => {
    const db = req.app.get("db")
    const { user_id } = req.session.user
    db.favorite
    .get_favorites(user_id)
    .then(results => {
      const modifiedResults = results.reduce((acc, e) => {
        acc[e.category_name] ? acc[e.category_name].push(e) : acc[e.category_name] = [e]
        return acc
      }, {})
      res.status(200).send(modifiedResults)
    })
    .catch(err => res.status(500).send(err))
  },
  getFavoritesByCategory: (req, res) => {
    const db = req.app.get('db')
    const {user_id} = req.session.user
    const {category_id} = req.params
    db.favorite.get_favorites_by_category(user_id, category_id)
    .then(results => res.status(200).send(results))
    .catch(err => res.status(500).send(err))
  },
  addFavorite: (req, res) => {
    const db = req.app.get('db')
    const {user_id} = req.session.user
    const {name, image, rating, external_id, category_id} = req.body
    db.favorite.add_favorite({user_id, ...req.body})
    .then(results => res.status(200).send(results))
    .catch(err => res.status(500).send(err))
  },
  deleteFavorite: (req, res) => {
    const db = req.app.get("db")
    const { user_id } = req.session.user
    const { favorite_id } = req.params
    db.favorite.delete_favorite(user_id, favorite_id)
    .then(results => res.status(200).send(results))
    .catch(err => res.status(500).send(err))
  }
}