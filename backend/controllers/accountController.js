
import ClientAccount from "../models/clientAccount.js";
import EmployeeAccount from "../models/employeeAccount.js";
import authController from "./authController.js";

const displayInfo = async (req, res) => {
  try {
    //console.log("Grab logic for which account to grab and display info from.");
    const clientResults = await ClientAccount.find({});
    const employeeResults = await EmployeeAccount.find({});
    res
      .status(200)
      .send({ body: { clients: clientResults, employees: employeeResults } });
  } catch (e) {
    console.log(e.message);
    res.status(404).send("Unable to display account information.");
  }
};

const displayEmployees = async (req, res) => {
  // only display if admin
  try {
    const result = await EmployeeAccount.find({});
    res
      .status(200)
      .send({ message: "Loading all available employees", result: result });
  } catch (e) {
    console.log(e.message);
  }
};

const displayClients = async (req, res) => {
  try {
    const result = await ClientAccount.find({});
    res
      .status(200)
      .send({ message: "Loading all available clients", result: result });
  } catch (e) {
    console.log(e.message);
    res
      .status(404)
      .send({ message: "Unable to load clients. Try again.", body: result });
  }
};

// User Creation
const addClient = async (req, res) => {
  console.log("Password Entered:", req.body.password);
  const hashedPassword = await authController.genHash(req.body.password);
  console.log("Request Body", req.body);
  console.log("In Add Client. Hash Pass:", hashedPassword);

  try {
    console.log("Add Client");
    const clientAcct = new ClientAccount({
      ...req.body,
      password: hashedPassword,
    });
    console.log(clientAcct);
    await clientAcct.save();
    res.status(200).json(clientAcct);
  } catch (e) {
    console.log(e);
    res.status(404).json({
      message: "Unable to add new client. Review schema and try again.",
      body_username: req.body.username,
    });
  }
};

const addEmployee = async (req, res) => {
  const hashedPassword = await authController.genHash(req.body.password)
  try {
    console.log("Add Employee");
    const employeeAcct = new EmployeeAccount({...req.body, password: hashedPassword});
    await employeeAcct.save();
    res.status(200).json(employeeAcct);
  } catch (e) {
    console.log(e);
    res.status(404).json({
      message: "Unable to add new employee. Review schema and try again.",
      body: req.body,
    });
  }
};

// User Edit

const editClientDetails = async (req,res) => {
  console.log(req)
  const username = req.body.username
  try{
    const originalDetails = await ClientAccount.find({username})
    const updateConnection = await ClientAccount.updateOne({username}, {$set: {...req.body}})
    const newDetails = await ClientAccount.find({username})
    console.log(updateConnection)
    res.status(200).json({message: "Client details edited.", originalInfo: originalDetails, updatedInfo: newDetails, result: updateConnection})

  }
  catch(e){
    console.log(e)
    res.status(404).json({message:"Unable to make request. Try Again.", body: req.body})
  }
}

const editEmployeeDetails = async (req,res) => {
 const username = req.body.username
  try{
    const originalDetails = await EmployeeAccount.find({username})
    const updateConnection = await EmployeeAccount.updateOne({username}, {$set: {...req.body}})
    const newDetails = await EmployeeAccount.find({username})
    console.log(updateConnection)
    res.status(200).json({message: "Employee details edited.", originalInfo: originalDetails, updatedInfo: newDetails, result: updateConnection})

  }
  catch(e){
    console.log(e)
    res.status(404).json({message:"Unable to make request. Try Again.", body: req.body})
  }
}

// User Deletion
const deleteClientAccount = async (req, res) => {
  const username = req.body.username
  try {
    const clientToDelete = await ClientAccount.deleteOne({username})
    console.log(clientToDelete)
    res.status(200).json({message: "Client successfully deleted.", userDeleted: username, data: clientToDelete})
  } catch (e) {
    console.log(e);
    res.status(404).json({message: "Client not found. Successfully deleted and/or does not exist.", body: req.body})
  }
};

const deleteEmployeeAccount = async(req,res) => {
  const username = req.body.username
  try{
    const employeeToDelete = await EmployeeAccount.deleteOne({username})
    //move to old employee accounts collection? Do we want to keep past data? 
    res.status(200).json({message: "Employee successfully deleted.", userDeleted: employeeToDelete})
  }
  catch(e){
    console.log(e)
    res.status(404).json({message: "Employee not found. Successfully deleted and/or does not exist.", body: req.body})
  }
}
const deleteUser = async (req,res) => {
  req.client_type == "client" ? deleteClientAccount : deleteEmployeeAccount;
}

 const displayProfile = async (req,res) => {
    console.log(req.body)
    const userInfo = req.user
    console.log(userInfo)
    try{
      const user = ClientAccount.find({username})
      console.log(user)
    }
    catch(e){
      console.log(e)
    }
    
  }

// Sign In Logic
const clientSignIn = async (req, res) => {
  console.log("In Client Sign In")
  console.log(req.user)
  if(req.user == undefined){ console.log("Invalid Password. Try Again."); throw Error}
  try{
  const getToken = await authController.getToken(req.user)
  res.status(200).json({token: getToken, user: req.user})
  //res.redirect('/account/profile')
  }
  catch(e){
    console.log(e)
  }
};

  // try {
  //   console.log(req);
  //   const connection = await fetch(BACKEND_URL + "/account/login/client");
  //   const result = await connection.json();
  //   const findUserByName = await result.find({ username: req.body?.username });

  //   const findUserByPhone = await result.find({ phone: req.body?.contact?.phone }); // need logic to go thru array pf contact

  //   const findUserByEmail = await result.find({ email: req.body?.contact?.email });

  //   const userFound = findUserByName || findUserByEmail || findUserByPhone;

  //   console.log(userFound);

  //   console.log(result);
  // } catch (e) {
  //   console.log(e);
  //   res.status(404).send({ message: e.message }); // body: (username entered)
  // }



export default {
  displayInfo,
  addEmployee,
  displayEmployees,
  displayClients,
  addClient,
  clientSignIn,
  displayProfile,
  deleteUser, 
  editClientDetails,
  deleteClientAccount,
  editEmployeeDetails,
  deleteEmployeeAccount
};
