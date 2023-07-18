const express = require('express')
const app = express()
const mongoose = require("mongoose")
const passport = require("passport");
const session = require("express-session")
const port = 3300
const cors = require('cors')
require('dotenv').config()
const connectDB = require("./config/database")
const mainRoutes =require("./routes/main")



app.use(cors())

app.use(
    cors({
        origin: 'https://gpt-chat-front.onrender.com',
    })
)

connectDB()


app.use(express.json())
app.use(express.urlencoded({ extended: true }))



app.use("/",mainRoutes)

app.listen(port, () => {
    console.log(`CORS-enabled web server on port ${port}`)
})
