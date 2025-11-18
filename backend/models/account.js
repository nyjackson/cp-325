import enums from "../enums";
import mongoose from "mongoose";

const accountSchema = mongoose.Schema({
  client_first_name: {type:String, required: true},
  client_last_name: {type: String, required :true},
  
});

const Account = mongoose.model('accounts', accountSchema) // collection, schema

export default Account
