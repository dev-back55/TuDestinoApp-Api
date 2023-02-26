import dotenv from "dotenv";

dotenv.config();

const config = {
  port: process.env.PORT,
  db: process.env.MONGO_URI,
  paypal: {
    api_client: process.env.PAYPAL_API_CLIENT,
    api_secret: process.env.PAYPAL_API_SECRET,
    api_url: process.env.PAYPAL_API_URL,
  },
};

export default config;
