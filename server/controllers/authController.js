const bcrypt = require('bcryptjs')

module.exports = {
  register: (req, res) => {
    const db = req.app.get('db')
    const {email, password, first_name, last_name, age} = req.body
    const emailResult = await db.auth.get_user_by_email(email)
    if(emailResult[0]){
      return res.status(409).send('Email already registered')
    }
    const salt = bcrypt.genSaltSync(10)
    const hash = bcrypt.hashSync(password, salt)
    const user = await db.auth.register_user({
      username,
      email,
      first_name,
      last_name,
      age,
      hash
    })
    delete user[0].hash
    req.session.user = user[0]
    return res.status(200).send(req.session.user)
  },
  login: (req, res) => {
    const db = req.app.get('db')
    const {email, password} = req.body
    const result = await db.auth.get_user_by_email(email)
    const user = result[0]
    if(!user){
      return res.status(401).send('User not found.')
    }
    const isAuthenticated = bcrypt.compareSync(password, user.hash)
    if(!isAuthenticated){
      return res.status(403).send('Incorrect Password.')
    }
    delete user.hash
    req.session.user = user
    return res.status(200).send(req.session.user)
  },
  logout: (req, res) => {
    req.session.destroy()
    res.sendStatus(200)
  },
  getUser: (req, res) => {
    if(!req.session.user){
      return res.status(401).send('User not found.')
    }
    res.status(200).send(req.session.user)
  }
  
}