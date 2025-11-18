/***\
 * _id (auto), name, 
 *
 */

import mongoose from "mongoose";
const appointmentSchema = mongoose.Schema({
  client_first_name: {type:String, required: true},
  client_last_name: {type: String, required :true},
  date_scheduled: {type: Date, required: true},
  time_scheduled: {type: Date, required:true},
  status: {type:String, required:true}, // completed, scheduled, canceled, rescheduled (enum?)
  special_requests:{type:String, required:false},
  
});

const Appointment = mongoose.model('appointment', appointmentSchema)

export default Appointment
