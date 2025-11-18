import express from 'express'
import 'dotenv/config'
import connectDB from './db.js'
const app = express()
const port = 5000

app.use(express.json())

app.use((req,res,next) => {
    console.log(req.url)
    next()
})
app.get('/', (req, res) => {
    res.status(200).send("Hello World")
})

app.listen(port, () =>{
console.log("Listening on port ", port)
connectDB()
})