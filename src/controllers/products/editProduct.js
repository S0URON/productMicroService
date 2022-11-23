import Product from "../../models/product.model";
import mongoose from "mongoose";

export async function editProduct(req, res) {
    try {
        const product = await Product.findOne({
            _id: mongoose.Types.ObjectId(req.params.id),
        });

        if (req.body.name) {
            product.name = req.body.name;
        }
        if (req.body.desciption) {
            product.desciption = req.body.desciption;
        }
        if (req.body.category_id) {
            product.category_id = mongoose.Types.ObjectId(req.body.category_id);
        }
        if (req.body.price) {
            product.price = req.body.price;
        }
        console.log(product);
        await product.save();

        res.status(200).send(`product ${req.params.id} updated !`);
    } catch (error) {
        res.status(400).send("an error occured");
        console.log(error);
    }
}
