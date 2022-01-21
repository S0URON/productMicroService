import Product from "../../models/product.model"
import mongoose from "mongoose"

export async function editProduct(req, res) {
    try {

        const product = await Product.findOne({ _id: mongoose.Types.ObjectId(req.params.id)});

        if(req.body.name){
            product.name = req.body.name;
        }else if(req.body.desciption){
            product.desciption = req.body.desciption;
        }else if(req.body.category_id){
            product.category_id = req.body.category_id;
        }else if(req.body.price){
            product.price = req.body.price;
        }else{
            return res.status(400).send("nothing to update!");
        }

        await product.save();


        res.status(200).send(`product ${req.params.id} updated !`);
        
    } catch (error) {
        res.status(400).send("an error occured");
        console.log(error);
    }
}