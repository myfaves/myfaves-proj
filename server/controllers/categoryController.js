module.exports = {
  getCategories: (req, res) => {
    const db = req.app.get('db')
    const {user_id} = req.session.user
    db.category.get_categories(user_id).then(results => {
      res.status(200).send(results)
    }).catch(err => res.status(500).send(err))
  },
  addCategory: (req, res) => {
    const db = req.app.get('db')
    const {user_id} = req.session.user
    const {category_id} = req.params
    db.category.add_category(user_id, category_id).then(results => {
      res.status(200).send(results)
    }).catch(err => res.status(500).send(err))
  }
}