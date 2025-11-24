//import enums from "../enums";
import mongoose from "mongoose";

const clientAccountSchema = mongoose.Schema({
  first_name: {type:String, required: true},
  last_name: {type: String, required :true},
  username: {type:String, required:true},
  password: {type: String, required:true},
  contact:{type:Object, required: true}, // {phone_number: {cell: "973-325-3425", work: "294-342-5789", home: "342-734-8562"}
  joined_on: {type: Date, default: Date.now(), required:true},
  curr_appts: {type: Array, default: []},
  past_appts:{type:Array, default:[]},
  completed_forms:{type:Array, default:[]},
  req_forms: {type:Array, default: []},
  tax_yr_returns: {type: Array, default: []}, // {return_yr: 2021, completed: BOOL completed_on: DATE, status: refund_given || payment_owed
  connected_accounts: {type: Array, default: []} //by client username
});

clientAccountSchema.index({"username":1})
const ClientAccount = mongoose.model('client_accounts', clientAccountSchema) // collection, schema

export default ClientAccount