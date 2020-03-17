module.exports = {
  getFriends: (req, res) => {
    const db = req.app.get('db')
    const {user_id} = req.session.user
    db.friend.get_friends(user_id).then(results => {
      res.status(200).send(results)
    }).catch(err => res.status(500).send(err))
  },
  addFriend: (req, res) => {
    const db = req.app.get('db')
    const {user_id} = req.session.user
    const {friend_id} = req.params
    db.friend.add_friend(user_id, friend_id).then(() => {
      res.sendStatus(200)
    }).catch(err => res.status(500).send(err))
  }
}