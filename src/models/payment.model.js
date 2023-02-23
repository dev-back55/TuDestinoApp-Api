import mongoose from "mongoose";

const PaymetSchema = new mongoose.Schema({

  idUser:{
    type: String,
    require: true,
  },
  idProduct:{
    type: String,
    require: true,
  },
  username:{
    type: String,
    require: true,
  },
  numberEvening: {
    type: Number,
    require: true,
  },
  dateRegister: {
    type: String,
    require: true,
  },
  dateInit:{
    type: String,
    require: true
  },
  dateEnd:{
    type: String,
    require: true,
  },
  price: {
    type: Number,
    require: true,
  },
  total: {
    type: Number,
    require: true,
  }
 
});

export default mongoose.model("Payment", PaymetSchema);
