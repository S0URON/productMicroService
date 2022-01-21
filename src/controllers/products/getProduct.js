import Product from "../../models/product.model"
import mongoose from "mongoose"


export async function getProductById(req, res) {
    try {

        const product = await Product.find({_id : mongoose.Types.ObjectId(req.params.id)});

        res.status(200).json({
            product : product[0]
        })
        
    } catch (error) {
        res.status(400).send("an error occured");
        console.log(error);
    }
}