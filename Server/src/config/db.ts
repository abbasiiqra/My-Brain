import mongoose from "mongoose"

const dbConnect = ()=>{
  mongoose.connect(`${process.env.DBurl}`).then(()=>{
    console.log("Connected Successfully")
  }).catch((err)=>{
    console.log("Something Wrong",err)
  })
}

export default dbConnect