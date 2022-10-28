const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const productSchema = new mongoose.Schema({
    title:{type:String, required:true}, //ten san pham
    price:{type:Number, required:true}, //gia san pham
    size:{type:Number, required:true}, //size giay 
    color:{type:String,required:true}, //mau giay
    describe:{type:String,required:true}, //mo ta giay
    quantity:{type:Number, required:true}, //so luong giay
    image:{type:String, required:true}, // hinh anh giay
    status:{type:Boolean, required:true}, //trang thai giay
    typeofProduct:{type:String, required:true}, //loai giay
    user:{type:ObjectId, required:true}
},{
    timestamps:true
})

const Product = mongoose.model('product',productSchema)
module.exports = Product;