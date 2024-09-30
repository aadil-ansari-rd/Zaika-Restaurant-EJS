const express = require('express');
const router = express.Router();
router.use(express.urlencoded({extended: false}));

const usercontroller = require('../controllers/usercontroller');


router.get('/', (req,res)=>{
    res.render('home');
})
router.get('/signin',(req,res)=>{
    res.render('signin');
})
router.get('/login',(req,res)=>{
    res.render('login');
})

router.post('/add/user',(req,res)=>{
    usercontroller.addUser(req,res);
})

router.post('/login/enter',(req,res)=>{
    usercontroller.loginEnter(req,res);
})

module.exports= router;