import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './db.js'
import accountRoutes from './routes/accountRoutes.js'

const app = express()
const port = process.env.PORT || 5000

// Middleware
app.use(express.json())
app.use(cors()) //uncomment once needed, re-comment on backend testing

app.use((req,res,next) => {
    console.log(req.url)
    next()
})

// Routes
app.use('/account', accountRoutes)

app.get('/', (req, res) => {
    res.status(200).send({message: "Grabbing all info", body:res.body})
})

app.listen(port, () =>{
console.log("Listening on port", port)
connectDB()
})