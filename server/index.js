require("dotenv").config({ path: `${__dirname}/../.env` })
const express = require("express")
const session = require("express-session")
const massive = require("massive")
const cors = require("cors")
const app = express()
const { SERVER_PORT, SESSION_SECRET, CONNECTION_STRING } = process.env

//CONTROLLERS
const authCtrl = require("./controllers/authController")
const userCtrl = require("./controllers/userController")
const categoryCtrl = require("./controllers/categoryController")
const movieCtrl = require("./controllers/movieController")
const gameCtrl = require('./controllers/gameController')

//MIDDLEWARE
app.use(express.json())
app.use(cors())
app.use(
  session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 1000 * 60 * 60 * 24 }
  })
)
app.use((req, res, next) => {
  console.log(`${new Date()} - ${req.method} request for ${req.url}`)
  next()
})

//DB CONNECTION
massive(CONNECTION_STRING).then(db => {
  app.set("db", db)
  console.log("Database Connected")
  app.listen(SERVER_PORT, () =>
    console.log(`Server listening on ${SERVER_PORT}`)
  )
})

//ENDPOINTS
//AUTH ENDPOINTS
app.post("/auth/register", authCtrl.register)
app.post("/auth/login", authCtrl.login)
app.post("/auth/logout", authCtrl.logout)
app.get("/auth/user", authCtrl.getUser)

//USER ENDPOINTS
app.put("/api/user", userCtrl.editUser)

//FAVES ENDPOINTS

//USER CATEGORY ENDPOINTS
app.get("/api/categories", categoryCtrl.getCategories)
app.post("/api/categories/:category_id", categoryCtrl.addCategory)

//MOVIE FAVES ENDPOINTS
app.get("/api/movies", movieCtrl.getFavorites)
app.post("/api/movies", movieCtrl.addFavorite)
app.delete("/api/movies/:movie_id", movieCtrl.deleteFavorite)

//GAME FAVES ENDPOINTS
app.get("/api/games", gameCtrl.getFavorites)
app.post("/api/games", gameCtrl.addFavorite)
app.delete("/api/games/:games_id", gameCtrl.deleteFavorite)
