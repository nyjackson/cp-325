//import enums from "../enums";
import mongoose from "mongoose";

const employeeAccountSchema = mongoose.Schema({
  employee_first_name: {type:String, required: true},
  employee_last_name: {type: String, required :true},
  username: {type:String, required:true},
  password: {type: String, required:true},
  contact:{type:Object, required: true}, // {phone_number: {cell: "973-325-3425", work: "294-342-5789", home: "342-734-8562", email: "bobBobberson@mail.com"}
  joined_on: {type: Date, default: Date.now(), required:true},
  
});

const EmployeeAccount = mongoose.model('accounts', employeeAccountSchema) // collection, schema

export default EmployeeAccount
