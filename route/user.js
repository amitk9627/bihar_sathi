const router=require('express').Router();
const {loginUser,forgetUser,createUser} =require('../controllers/user.js');
router.post('/signup',createUser)
router.post('/login' ,loginUser);
module.exports=router;