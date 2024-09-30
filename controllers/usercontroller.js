const User = require('../models/User');

async function addUser(req, res) {
    try {
        let student = new User(req.body);
        await student.save();
        res.render('registered');
    }catch(err){
        console.log(err)
    }
}
async function loginEnter(req,res){
    try{
        let mobile = req.params.mobileNo;
        let password = req.params.password;
        let user = User.findOne({mobileNo:mobile});
        res.render('loginEnter',{user : user});
    }catch(err){
        console.log(err);
    }
}

module.exports = {
    addUser,
    loginEnter
}