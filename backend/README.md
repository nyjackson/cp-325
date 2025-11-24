# Tax Tavern Backend Breakdown

## Folders and Files

### enums.js
- Contains the enum objects like employee access roles, appointment types, appointment status, and appointment types. 

### db.js
- Establishes the connection to the MongoDB Collection

### index.js
- Main backend file connecting express and mongodb

### /controllers 
- accountController.js: Contains the route logic for client and employee account creation, deletion, signin, and modification.
- articleController.js: Contains the route logic for article creation, modification, and deletion*
- authController.js: Contains the profile signin authentication logic and token generation.

### /models
- appointment.js: Mongoose model schema for appointments 
- article.js: Mongoose model schema for appointments 
- clientAccount.js: Mongoose model schema for client accounts
- employeeAccount.js: Employee model schema for employee accounts

### /routes
- accountRoutes.js: Contains the routing for account controller functions (POST, GET, PUT, DELETE)
- articleRoutes.js: Contains the routing for article controller functions*

## Notes and Known Issues
- Incomplete Features are denoted with an asterisk (*)
