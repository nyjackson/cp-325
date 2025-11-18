import express from 'express'
import accountController from '../controllers/accountController.js'
const router = express.Router()

router.get('/', accountController.displayInfo)
router.get('/all/employees',accountController.displayEmployees)
router.post('/add/employee', accountController.addEmployee)
//router.get('/', accountController.displayInfo)
export default router;
