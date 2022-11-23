import { Router } from 'express';
import Category from "../models/category.model"
import mongoose from "mongoose"


const routes = new Router();

routes.get('', async (req, res) => {
    try {
        const categories = await Category.find({});

        res.status(200).json({
            categories
        })
    } catch (error) {
        res.status(400).send("an error occured");
        console.log(error);
    }
});
routes.post('', async (req, res) => {
    try {
        const newCategory = {
            _id: new mongoose.Types.ObjectId(),
            name: req.body.name
        }

        await Category.create(newCategory);
        res.status(200).send(`category ${newCategory._id} created !`);

    } catch (error) {
        res.status(400).send("an error occured")
        console.log(error)
    }
})


export default routes;
