// Nhan vien
const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const employeeSchema = new mongoose.Schema({
    name:{type:String, required:true}, //ten khach hang
    phone:{type:String, required:true}, //sdt 
    email: {type: String, required: true},//email
    role: {type: String, required: true},// chức vụ
    decentralize:{type:Number,required:true},//phan quyen

},{
    timestamps:true
});

const Employee = mongoose.model('employee',employeeSchema);
module.exports =Employee;
