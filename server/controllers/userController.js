module.exports = {
  editUser: (req, res) => {
    const db = req.app.get('db')
    const {user_id} = req.session.user
    const {email, first_name, last_name, age} = req.body
    db.user.edit_user({user_id, email, first_name, last_name, age}).then(results => {
      req.session.user = results[0]
      res.status(200).send(req.session.user)
    }).catch(err => res.status(500).send(err))
  }
}