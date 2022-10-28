const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const paymentSchema = new mongoose.Schema({
    orderID:{type:ObjectId, required:true}, //ma khach hang
    pmMethod:{type:String, required:true}, //phuong thuc
    content:{type:String, required:true}, //noi dung binh luan
    customerName:{type:String, required:true}, //tenkhachhang
    starPoint:{type:String, required:true}, //danh gia sao
},{
    timestamps:true
})

const Rate = mongoose.model('rate',rateSchema)
module.exports = Rate;