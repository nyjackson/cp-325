/***\
 * _id (auto), name, 
 *
 */
import enums from "../enums";
import mongoose from "mongoose";

const appointmentSchema = mongoose.Schema({
  client_first_name: {type:String, required: true},
  client_last_name: {type: String, required :true},
  tax_type: {type:enums.APPT_TAX_TYPE, required:false}, // enum determines how long an appointment will be. IND: 1 hr, BUS: 2+ hrs
  appt_type: {type: enums.APPT_TYPE, required:true},
  date_scheduled: {type: Date, required: true},
  time_scheduled: {type: Date, required:true},
  status: {type: enums.APPT_STATUS, required:true}, // completed, scheduled, canceled, rescheduled, confirmed, unconfirmed, missed (enum?)
  notes: {type:String, required:false},
  special_requests:{type:String, required:false},
});

const Appointment = mongoose.model('appointments', appointmentSchema) // collection, schema

export default Appointment
