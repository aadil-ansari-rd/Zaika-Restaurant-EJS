const mongoose = require('mongoose');
const timestamps = require('mongoose-timestamps');
const Schema= mongoose.Schema;
const UserSchema = new Schema({
    fname : { type : String },
    lname : { type : String },
    countryCode : { type : String },
    mobileNo : { type : String },
    password : { type : String },
    confirmPassword : { type : String },
    createdAt: Date,
    updatedAt: Date
})
UserSchema.plugin(timestamps, {index:true});
module.exports= mongoose.model('User',UserSchema);