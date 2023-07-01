const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name : {
        required : [true , 'Enter your name'],
        type : String,
        minLength : [5 , 'Minimum length should be 5'],
    },
    password : {
        required : true,
        type : String,
        minLength : [8 , 'Password lenght must be more then 8']
    }
})

const User = mongoose.model('user' , userSchema );
module.exports = User;