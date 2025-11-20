import express from 'express'
import accountController from '../controllers/accountController.js'
const router = express.Router()
// account/*

router.get('/all/employees',accountController.displayEmployees)
router.get('/all/clients',accountController.displayClients)

router.post('/register/client', accountController.addClient)
router.post('/register/employee', accountController.addEmployee)

router.get('/', accountController.displayInfo)

router.get('/signin/client',accountController.clientSignIn)

export default router;
