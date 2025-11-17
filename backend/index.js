import express from 'express'
import 'dotenv/config'

const app = express()
const port = 5000

app.use(express.json())
app.use((req,res,next) => {
    console.log(req.url)
    next()
})

app.listen(port, ()=>{
console.log("Listening on port ", port)
})