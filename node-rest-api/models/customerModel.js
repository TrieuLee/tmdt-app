// Khach hang
const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const customerSchema = new mongoose.Schema({
    name:{type:String, required:true}, //ten khach hang
    phone:{type:String, required:true}, //sdt 
    email: {type: String, required: true},//email
    address:{type:String, required:true}, //dia chi
},{
    timestamps:true
});

const Customer = mongoose.model('customer',customerSchema);
module.exports =Customer;
