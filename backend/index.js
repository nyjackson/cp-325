import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './db.js'

// https://www.freecodecamp.org/news/how-to-hash-passwords-with-bcrypt-in-nodejs/

const app = express()
const port = process.env.PORT || 5000

// Middleware
app.use(express.json())
app.use(cors)

app.use((req,res,next) => {
    console.log(req.url)
    next()
})

// Routes
app.get('/', (req, res) => {
    res.status(200).send("Hello World")
})

app.listen(port, () =>{
console.log("Listening on port ", port)
connectDB()
})