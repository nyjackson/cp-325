import express from 'express'
import accountController from '../controllers/accountController.js'
import authController from '../controllers/authController.js'

const router = express.Router()
// account/*

router.get('/all/employees',accountController.displayEmployees)
router.get('/all/clients',accountController.displayClients)

router.post('/register/client', accountController.addClient)
router.post('/register/employee', accountController.addEmployee)

router.get('/', accountController.displayInfo)

router.post('/login/client', authController.validate, accountController.clientSignIn) //middleware
router.get('/profile', accountController.displayProfile)

router.put('/edit/client', accountController.editClientDetails)
router.put('/edit/employee', accountController.editEmployeeDetails)

router.delete('/delete', accountController.deleteUser)
router.delete('/delete/client', accountController.deleteClientAccount)
router.delete('/delete/employee', accountController.deleteEmployeeAccount)

router.get('/signout', accountController.signout)

export default router;
