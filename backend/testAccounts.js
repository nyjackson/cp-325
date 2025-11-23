const bob = {

}

const bananaKickFlip = {
    "first_name": "Banana",
    "last_name": "Kickflip",
    "username":"bkick",
    "password":"kickflip",
    "personal_contact": {"phone": "973-325-9859", "email": "bkickflipster@mail.com"},
    "work_contact": {"phone": "778-995-6409", "email": "bkickflip@song-dynasty.com"},
    "access_role": "Admin",
    "certifications": ["CPA", "ITF", "CCP"]
}




// const clientAccountSchema = mongoose.Schema({
//   client_first_name: {type:String, required: true},
//   client_last_name: {type: String, required :true},
//   username: {type:String, required:true},
//   password: {type: String, required:true},
//   contact:{type:Object, required: true}, // {phone_number: {cell: "973-325-3425", work: "294-342-5789", home: "342-734-8562"}
//   joined_on: {type: Date, default: Date.now(), required:true},
//   curr_appts: {type: Array, default: []},
//   past_appts:{type:Array, default:[]},
//   completed_forms:{type:Array, default:[]},
//   req_forms: {type:Array, default: []},
//   tax_yr_returns: {type: Array, default: []}, // {return_yr: 2021, completed: BOOL completed_on: DATE, status: refund_given || payment_owed
//   connected_accounts: {type: Array, default: []} //by client username
// });



// const employeeAccountSchema = mongoose.Schema({
//   employee_first_name: { type: String, required: true },
//   employee_last_name: { type: String, required: true },
//   username: { type: String, required: true },
//   password: { type: String, required: true },
//   personal_contact: { type: Object, required: true }, // {phone_number: {cell: "973-325-3425", work: "294-342-5789", home: "342-734-8562", email: "bobBobberson@mail.com"}
//   work_contact: { type: Object, required: true }, // company_number, company_email
//   joined_on: { type: Date, default: Date.now(), required: true },
//   // access_role: {type: enums.EMP_ROLES, required:true},
//   certifications: { type: Array, required: true },
// });