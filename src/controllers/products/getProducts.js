import Product from "../../models/product.model"

export async function getProducts(req, res) {
    try {

        const products = await Product.find({});

        res.status(200).json({
            products
        })
    } catch (error) {
        res.status(400).send("an error occured");
        console.log(error);
    }
}