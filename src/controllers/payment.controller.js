import mercadopago from "mercadopago";
import Payment from "../models/payment.model.js";
import axios from "axios";


// export const createPayment = async (req, res) => {

//     try {
//         const data = new Payment(req.body);
        // let preference ={
        //         items:[{
        //             username: data.username,
        //             idProduct: data.idProduct,
        //             idUser: data.idUser,
        //             dateRegister: data.dateRegister,
        //             dateInit: data.dateInit,
        //             dateEnd: data.dateEnd,
        //             price: data.price,
        //             total: data.total,
        //             numberEvening: data.numberEvening,

        //         }],
        //         back_urls: {
        //             success: 'http://localhost:5000',
        //             failure: '',
        //             pending:'',
        //         },
        //         auto_return:'approved',
        //         binary_mode:true,
        //     }

        //    const merca = mercadopago.preferences.create(preference)
        //    res.status(201).json(merca)


//         const savedPayment = await data.save();
//         res.status(201).json(savedPayment);

//     }
//     catch (error) {
//         return res.status(400).json({ message: error.message });
//     }
// };

export const getAllPayment = async (req, res) => {
    
    try {
        const payments = await Payment.find();
        res.status(200).json(payments);
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
};
export const getPaymentId = async (req, res) => {
    const {id} = req.params
    try {
        const payments = await Payment.find({idUser:id});
        res.status(200).json(payments);
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
};

export const getQtyPayment = async (req, res) => {
    try {
      const qtyPaymentQuery = await Payment.countDocuments();
      res.status(200).json(qtyPaymentQuery);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
};

export const getTotalPayment = async (req, res) => {
    try {
      const qtyTotalPayment = await Payment.aggregate([
        {
            $group: {
               _id: null,
               total: { $sum: "$total" }
            }
          }
    ]);
      res.status(200).json(qtyTotalPayment);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  export const buscarReservasPorFechaDeHoy = async (req, res) => {
    try {

      const fechaHoy = new Date().toISOString().slice(0, 10); 
    
      const reservas = await Payment.find({ dateRegister: { $regex: fechaHoy } }).exec(); 
    
      res.status(200).json(reservas);

    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

  // PAYPAL 
export const createPayment = async (req, res) => {
    const { body } = req;
  
    try {
      const order = {
        intent: "CAPTURE",
        purchase_units: [
          {
            amount: {
              currency_code: "USD",
              value: body.totalPrice,
            },
            description: "Pago por reservación",
          },
        ],
        application_context: {
          brand_name: "tuDestino App",
          landing_page: "LOGIN",
          user_action: "PAY_NOW",
          return_url: "https://tu-destino-app-client.vercel.app/#/profile",
          cancel_url: "https://tu-destino-app-client.vercel.app/#/cancelled",
        },
      };
  
     
  
      //recover paypal token
      const params = new URLSearchParams();
      params.append("grant_type", "client_credentials");
      const token = await axios.post(
        `https://api-m.sandbox.paypal.com/v1/oauth2/token`,
        params,
        {
          headers: { "Content-Type": "application/x-www.from-ulrencoded" },
          auth: {
            username: config.paypal.api_client,
            password: config.paypal.api_secret,
          },
        }
      );
  
      //create buy paypal
      const response = await axios.post(
        `${config.paypal.api_url}/v2/checkout/orders`,
        order,
        {
          headers: {
            Authorization: `Bearer ${token.data.access_token}`,
          },
        }
      );
  
      res.status(201).json({ paypal: response.data });
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  };
  
  export const savePayment = async (req, res) => {
    try {
      const data = new Payment(req.body);
  
      const savedPayment = await data.save();
      res.status(201).json({ savedPayment });
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  };
