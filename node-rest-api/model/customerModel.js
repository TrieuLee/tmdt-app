// Khach hang
const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const customerSchema = new mongoose.Schema({
    name:{type:String, required:true}, //ten khach hang
    phone:{type:String, require:true}, //sdt 
    email: {type: String, required: true},//email

},{
    timestamps:true
});

const Customer = mongoose.model('customer',customerSchema);
module.exports =Customer;
