module.exports = {
  getFavorites: (req, res) => {
    const db = req.app.get("db")
    const { user_id } = req.session.user
    db.favorite
      .get_favorites(user_id)
      .then(results => {
        const modifiedResults = results.reduce((acc, e) => {
          const category_name = e.category_name
            .toLowerCase()
            .split(" ")
            .join("")
          acc[category_name]
            ? acc[category_name].push(e)
            : (acc[category_name] = [e])
          return acc
        }, {})
        res.status(200).send(modifiedResults)
      })
      .catch(err => res.status(500).send(err))
  },
  getFavoritesByCategory: (req, res) => {
    const db = req.app.get("db")
    const { user_id } = req.session.user
    const { category_id } = req.params
    db.favorite
      .get_favorites_by_category(user_id, category_id)
      .then(results => res.status(200).send(results))
      .catch(err => res.status(500).send(err))
  },
  getAllFavoritesByCategory: (req, res) => {
    const db = req.app.get("db")
    const { category_id } = req.params
    // console.log({category_id})
    db.favorite
      .get_all_favorites_by_category(category_id)
      .then(results => {
        const modifiedResults = results
          .reduce((acc, e) => {
            const external_id = e.external_id
            let alreadyHas = false
            for (let i = 0; i < acc.length; i++) {
              if (acc[i].external_id === external_id) {
                alreadyHas = true
                acc[i].count++
              }
            }
            if (!alreadyHas) {
              e = { ...e, count: 1 }
              acc.push(e)
            }
            return acc
          }, [])
          .sort((a, b) => b.count - a.count)
          .filter((e, i) => i < 5)
        res.status(200).send(modifiedResults)
      })
      .catch(err => res.status(500).send(err))
  },
  addFavorite: async (req, res) => {
    const db = req.app.get("db")
    const { user_id } = req.session.user
    const { name, image, rating, external_id, category_id } = req.body
    const favorites = await db.favorite.get_favorites(user_id)
    const found = favorites.find(e => +e.external_id === +external_id)
    if (!found) {
      db.favorite
        .add_favorite({ user_id, ...req.body })
        .then(results => res.status(200).send(results))
        .catch(err => res.status(500).send(err))
    } else {
      res.status(200).send(favorites)
    }
  },
  deleteFavorite: (req, res) => {
    const db = req.app.get("db")
    const { user_id } = req.session.user
    const { favorite_id } = req.params
    db.favorite
      .delete_favorite(user_id, favorite_id)
      .then(results => res.status(200).send(results))
      .catch(err => res.status(500).send(err))
  }
}
