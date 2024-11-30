const User = require('../models/User');
const bcrypt = require('bcrypt');
const saltRounds = 10;

async function addUser(req, res) {
    try {
        let password = bcrypt.hashSync(req.body.password,19);
        let user = new User(req.body);
        user.password = password;
        await user.save();
        console.log(user);
        res.render('registered');
    }catch(err){
        console.log(err)
    }
}
async function loginEnter(req,res){
    try{
        console.log(req.body.mobileNo);
        let user = await User.findOne({mobileNo:req.body.mobileNo});
        console.log(user,'user');
        if(!user){
            res.end("No such user exist");
        }else{          
            let isMatch= await bcrypt.compare(req.body.password, user.password);//return a boolean value
            if(isMatch){
                res.render('loginEnter', {user});
            }else{
                res.end("Incorrect Password");
            }

        }
    }catch(err){
        console.log(err);
    }
}

module.exports = {
    addUser,
    loginEnter
}