import app from "./app.js";
import dbConnect from "./config/db.config.js";
import config from "./config/env.config.js";

const server = () => {
  app.listen(config.port, () => {
    console.log(`RUN SERVER IN PORT: ${config.port}`);
  });

  dbConnect();
};

server();

app.get("/", (req,res) => {
  res.send("Server is Running...")
})