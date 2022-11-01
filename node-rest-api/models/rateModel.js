const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const rateSchema = new mongoose.Schema({
    customerID:{type:ObjectId, required:true}, //ma khach hang
    title:{type:String, required:true}, //tieu de binh luan
    content:{type:String, required:true}, //noi dung binh luan
    customerName:{type:String, required:true}, //tenkhachhang
    starPoint:{type:String, required:true}, //danh gia sao
},{
    timestamps:true
})

const Rate = mongoose.model('rate',rateSchema)
module.exports = Rate;