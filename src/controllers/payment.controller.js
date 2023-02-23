import mercadopago from "mercadopago";
import Payment from "../models/payment.model.js";


export const createPayment = async (req, res) => {

    try {
        const data = new Payment(req.body);
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


        const savedPayment = await data.save();
        res.status(201).json(savedPayment);

    }
    catch (error) {
        return res.status(400).json({ message: error.message });
    }
};

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
        const payments = await Payment.findOne({_id:id});
        res.status(200).json(payments);
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
};



