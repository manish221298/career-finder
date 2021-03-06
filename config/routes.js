const express = require('express')
const router = express.Router() 
const usersController = require('../app/controllers/usersController')
const  authenticateUser  = require('../app/middlewares/authentication')
//const  authorizedUser  = require('../app/middlewares/authorization')
const resumeController = require('../app/controllers/resumeController')
const companyController = require('../app/controllers/companyController')
const assessmentController = require('../app/controllers/assessmentController')
const internshipController = require('../app/controllers/internshipController')

// api for user authentication
router.post('/users/register', usersController.register)
router.post('/users/login', usersController.login)
router.get('/users/account', authenticateUser, usersController.account)

// api for resume create, show and update
router.post('/resume/create', authenticateUser, resumeController.create)
router.get('/resume/create', authenticateUser,  resumeController.list)
router.get('/resume/createforadmin', authenticateUser, resumeController.show)
router.put('/resume/create/:id', authenticateUser, resumeController.update)

// api for company profile(create, delete, update, show)
router.post('/api/company', authenticateUser, companyController.create)
router.get('/api/company', authenticateUser, companyController.list)
router.get('/api/company/:id', authenticateUser, companyController.show)
router.put('/api/company/:id', authenticateUser, companyController.update)
router.delete('/api/company/:id', authenticateUser, companyController.destroy)

// Api for Applicant-Assessment
router.post('/api/assessment', authenticateUser, assessmentController.create)
router.get('/api/assessment', authenticateUser, assessmentController.list)

//  api for internship profile (create, show, update and delete)
router.post('/api/internship', authenticateUser,  internshipController.create)
router.get('/api/internship', authenticateUser,  internshipController.list)
router.get('/api/internship/:id', authenticateUser,  internshipController.show)
router.put('/api/internship/:id',authenticateUser, internshipController.update)
router.delete('/api/internship/:id',authenticateUser, internshipController.destroy)

//Twilio
router.post('/api/twilio', assessmentController.send)


module.exports = router