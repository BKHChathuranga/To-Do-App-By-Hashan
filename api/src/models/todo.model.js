import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
  title:{
    type:String,
    required:true
  },
  description:{
    type:String,
    required:true
  },
  dueDate:{
    type:Date
  },
  status:{
    type:String,
    enum:{
      values:["pending","ongoing","completed"],
      message: '{VALUE} is not a valid status'
    },
    default:"pending"
  }
})

export default mongoose.model("todo", todoSchema);