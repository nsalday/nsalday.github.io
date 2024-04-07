import mongoose from 'mongoose';

await mongoose.connect("mongodb://127.0.0.1:27017/StudentDatabase");

const Student = mongoose.model('Student',{
    stdnum: String,
    fname: String,
    lname: String,
    age: Number
});

// const homepage = (req,res) => {
//     res.send('Welcome to the Homepage');
// }

const saveStudent = async (req, res) => {

}

const updateUser = async (req,res) => {

}

const removeUser = async (req,res) => {

}

const removeAllUser = async (req,res) => {

}

const findUser = async (req,res) => {

}

const findMembers = async (req,res) => {

}


export {saveStudent, updateUser, removeUser, removeAllUser, findUser, findMembers}