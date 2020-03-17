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
const faveCtrl = require('./controllers/favoriteController')
const friendCtrl = require('./controllers/friendController')

// const movieCtrl = require("./controllers/movieController")
// const gameCtrl = require('./controllers/gameController')
// const songCtrl = require('./controllers/songController')
// const showCtrl = require('./controllers/showController')

//MIDDLEWARE
const authMid = require("./middleware/authMiddleware")
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

//FRIEND ENDPOINTS
app.get('/api/friends', friendCtrl.getFriends)
app.post('/api/friends/friend_id', friendCtrl.addFriend)

//FAVES ENDPOINTS
app.get('/api/favorites/:category_id', faveCtrl.getFavoritesByCategory)
app.get('/api/favorites', faveCtrl.getFavorites)
app.post('/api/favorites', faveCtrl.addFavorite)
app.delete('/api/favorites/:favorite_id', faveCtrl.deleteFavorite)

//USER CATEGORY ENDPOINTS
app.get("/api/categories", categoryCtrl.getCategories)
app.post("/api/categories/:category_id", categoryCtrl.addCategory)

// //MOVIE FAVES ENDPOINTS
// app.get("/api/movies", movieCtrl.getFavorites)
// app.post("/api/movies", movieCtrl.addFavorite)
// app.delete("/api/movies/:movie_id", movieCtrl.deleteFavorite)

// //GAME FAVES ENDPOINTS
// app.get("/api/games", gameCtrl.getFavorites)
// app.post("/api/games", gameCtrl.addFavorite)
// app.delete("/api/games/:game_id", gameCtrl.deleteFavorite)

// //SONG FAVES ENDPOINTS
// app.get("/api/songs", songCtrl.getFavorites)
// app.post("/api/songs", songCtrl.addFavorite)
// app.delete("/api/songs/:song_id", songCtrl.deleteFavorite)

// //SHOW FAVES ENDPOINTS
// app.get("/api/shows", showCtrl.getFavorites)
// app.post("/api/shows", showCtrl.addFavorite)
// app.delete("/api/shows/:show_id", showCtrl.deleteFavorite)
