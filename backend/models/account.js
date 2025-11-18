//import enums from "../enums";
import mongoose from "mongoose";

const accountSchema = mongoose.Schema({
  client_first_name: {type:String, required: true},
  client_last_name: {type: String, required :true},
  username: {type:String, required:true},
  password: {type: String, required:true},
  contact:{type:Object, required: true}, // {phone_number: {cell: "973-325-3425", work: "294-342-5789", home: "342-734-8562"}
  joined_on: {type: Date, default: Date.now(), required:true},
  curr_appts: {type: Array, default: []},
  past_appts:{type:Array, default:[]},
  completed_forms:{type:Array, default:[]},
  req_forms: {type:Array, default: []},
  tax_yr_returns: {type: Array, default: []}, // {return_yr: 2021, completed: BOOL completed_on: DATE, status: refund_given || payment_owed
 // tax_yr_return_results:{type: Array, default: []}
  

  
});

const Account = mongoose.model('accounts', accountSchema) // collection, schema

export default Account
