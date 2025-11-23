import express from 'express'

const router = express.Router()

router.get('/',(req,res) => {
    try{
        res.send("GET ARTICLES")
    }
    catch(e){
        console.log(e)
    }
})


export default router
//router.get("/all")