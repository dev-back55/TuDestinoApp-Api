import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
  title: {
    type: String,
    require: true,
  },
  country: {
    type: String,
    require: true,
  },
  city: {
    type: String,
    require: true,
  },
  address: {
    type: String,
    require: true,
  },
  image: {
    type: [{ type: String, required: true }],
  },
  unAvailable: {
    type: [{ booking: Number, initial: Date, exit: Date }],
  },
  description: {
    type: String,
    require: true,
  },
  maxPeople: {
    type: Number,
    require: true,
    min: 1,
    max: 1000,
  },
  price: {
    type: Number,
    require: true,
  },
  numberBedrom: {
    type: Number,
    min: 1,
  },
  numberBathroom: {
    type: Number,
    min: 1,
  },
  productType: {
    type: String,
    enum: ["house", "apartment", "bedroom"],
  },
  gym: {
    type: Boolean,
    default: false,
  },
  swimmingPool: {
    type: Boolean,
    default: false,
  },
});

export default mongoose.model("Product", ProductSchema);
