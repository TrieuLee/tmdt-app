const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const orderProductSchema = new mongoose.Schema({
    productID:{type:ObjectId, required:true}, //ma san pham
    addressDeli:{type:String, required:true}, //dia chi giao hang
    pay:{type:Number, required:true}, //so tien tra
    payment:{type: String, required:true}, //hinh thuc thanh toan
    orderDate:{type:String, required:true}, //ngay dat hang
    orderPayDate:{type:String, required:true}, //ngay thanh toan
    orderStatus:{type:Boolean, required:true}, // tinh trang dat hang
    orderDetail:{type:String, required:true}, // chi tiet don hang
    // 
    customerID:{type:ObjectId, required:true}, //ma khach hang
    name:{type:String, required:true}, //ten khach hang
    phone:{type:String, required:true}, //sdt 
    email: {type: String, required: true},//email
    address:{type:String, required:true}, //dia chi
    
},{
    timestamps:true
})

const orderProduct = mongoose.model('orderProduct',orderProductSchema);
module.exports = orderProduct;
