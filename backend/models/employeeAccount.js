//import enums from "../enums";
import mongoose from "mongoose";

const employeeAccountSchema = mongoose.Schema({
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  username: { type: String, required: true },
  password: { type: String, required: true },
  personal_contact: { type: Object, required: true }, // {phone_number: {cell: "973-325-3425", work: "294-342-5789", home: "342-734-8562", email: "bobBobberson@mail.com"}
  work_contact: { type: Object, required: true }, // company_number, company_email
  joined_on: { type: Date, default: Date.now(), required: true },
  // access_role: {type: enums.EMP_ROLES, required:true},
  certifications: { type: Array, required: true },
});

const EmployeeAccount = mongoose.model(
  "employee_accounts",
  employeeAccountSchema
); // collection, schema
 
export default EmployeeAccount;
