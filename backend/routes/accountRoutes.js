import express from 'express'
import accountController from '../controllers/accountController.js'
const router = express.Router()

router.get('/', accountController.displayInfo)
//router.get('/', accountController.displayInfo)
export default router;
