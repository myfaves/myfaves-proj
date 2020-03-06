require("dotenv").config({ path: `${__dirname}/../.env` })
const express = require("express")
const massive = require("massive")
const app = express()
const { SERVER_PORT, SESSION_SECRET, CONNECTION_STRING } = process.env

//CONTROLLERS
// const authCtrl = require("./controllers/authController")

//MIDDLEWARE
app.use(express.json())
app.use(
  session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 1000 * 60 * 60 * 24 }
  })
)
// app.use((req, res, next) => {
//   console.log(`${new Date()} - ${req.method} request for ${req.url}`)
// })

//DB CONNECTION
massive(CONNECTION_STRING).then(db => {
  app.set('db', db)
  console.log("Database Connected")
  app.listen(SERVER_PORT, () => console.log(`Server listening on ${SERVER_PORT}`))
})

//ENDPOINTS
//AUTH ENDPOINTS
// app.post("/auth/register", authCtrl.register)
// app.post("/auth/login", authCtrl.login)
// app.post("/auth/logout", authCtrl.logout)
// app.get("/auth/user", authCtrl.getUser)

//FAVS ENDPOINTS

//MOVIES ENDPOINTS
