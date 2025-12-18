import mongoose from "mongoose";

const ApplicationSchema = new mongoose.Schema({
  userid: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  companyName: {
    type: String,
    required: true,
    trim: true,
  },
  status: {
    type: String,
    lowercase:true,
    enum: ["applied", "interview", "rejected", "offer"],
    default: "applied",
  },
  role: {
    type: String,
    required: true,
    trim: true,
  },
  appliedDate: {
    type: Date,
    required: true,
  },
  notes:{
    type:String,
    trim:true
  }
},{timestamps:true});

export const Application = new mongoose.model('Application',ApplicationSchema)
