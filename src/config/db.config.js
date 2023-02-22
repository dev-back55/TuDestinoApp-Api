import { connect, set } from "mongoose";
import config from "./env.config.js";

const dbConnect = async () => {
  try {
    set("strictQuery", true);
    await connect(config.db);
    console.log("MONGODB CONNECT");
  } catch (error) {
    console.log(error);
  }
};

export default dbConnect;
