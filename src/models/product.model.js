import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    _id: mongoose.Schema.ObjectId,
    name: String,
    desctiption: String,
    category_id: {
        type: mongoose.Schema.ObjectId,
        ref: 'Category'
    },
    price: Number,
    createdAt: Date,
    updatedAt: Date
}, { collection: 'products', versionKey: false, _id : false });

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
