const express = require('express');
const path = require("path");
//const bcrypt = require("bcrypt");
const user = require('./routes/user')

const app = express();

//use EJS as view engine
app.set('view engine', 'ejs');
app.set('views',path.resolve('./views'));

const connection = require('./connection');
connection();

app.use(user);


app.listen(3030, (err)=>{
    if(err){
        console.log(err);
    }else{
        console.log("Server is running on port 3030")
    }
})