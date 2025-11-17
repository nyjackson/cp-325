import mongoose from 'mongoose'

async function connectDB(){
try{
await mongoose.connect(process.env.MONGOOSE_URL)
}
catch(e){

}
}

export default connectDB