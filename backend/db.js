import mongoose from 'mongoose'

async function connectDB(){
try{
await mongoose.connect(process.ev)
}
catch(e){

}
}

export default connectDB