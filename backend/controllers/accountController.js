import ClientAccount from "../models/clientAccount.js";
import EmployeeAccount from "../models/employeeAccount.js";

const displayInfo = async (req, res) => {
  try {
    console.log("Grab logic for which account to grab and display info from.");
    const clientResults = await ClientAccount.find({})
    const employeeResults = await EmployeeAccount.find({})
    res.status(200).send({body: {clients: clientResults, employees:employeeResults}});
  } catch (e) {
    console.log(e.message);
    res.status(404).send("Unable to display account information.");
  }
};

const displayEmployees = async (req,res) => {
    try{
        const result = await EmployeeAccount.find({})
        res.status(200).send({message: "Loading all available employees", result: result})
    }
    catch(e){
        console.log(e.message)
    }
}

const displayClients = async (req,res) => {
    try{
        
        const result = await ClientAccount.find({})
        res.status(200).send({message: "Loading all available clients", result: result})
    }
    catch(e){
        console.log(e.message)
        res.status(404).send({message: "Unable to load clients. Try again.", body: result})
    }
}

const addClient = async (req, res) => {
  try {
    console.log("Add Client");
    const clientAcct = new ClientAccount(req.body)
    //const clientAcct = ClientAccount.create(req.body);
    await clientAcct.save()
    res.status(200).json(clientAcct);
  } catch (e) {
    console.log(e);
    res
      .status(404)
      .json({
        message: "Unable to add new client. Review schema and try again.",
        body_username: req.body.username,
      });
  }
};

const addEmployee = async (req, res) => {
  try {
    console.log("Add Employee");
    //const employeeAcct = EmployeeAccount.create(req.body);
    const employeeAcct = new EmployeeAccount(req.body)
    await employeeAcct.save()
    res.status(200).json(employeeAcct);

  } catch (e) {
    console.log(e);
    res
      .status(404)
      .json({
        message: "Unable to add new employee. Review schema and try again.",
        body: req.body,
      });
  }
};

const deleteAccount =  async (req,res) => {
    try{
        console.log("Delete Account")
        
        
    }
    catch(e){
        console.log(e)
    }
}
export default { displayInfo, addEmployee, displayEmployees, displayClients, addClient };
