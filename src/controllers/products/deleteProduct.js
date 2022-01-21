import Product from "../../models/product.model"
import mongoose from "mongoose"


export async function deleteProduct(req, res) {
    try {
        
        await Product.findOneAndDelete({_id : mongoose.Types.ObjectId(req.params.id)});

        res.status(200).send(`product ${req.params.id} deleted !`)

    } catch (error) {
        res.status(400).send("an error occured");
        console.log(error);
    }
}