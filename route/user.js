const router=require('express').Router();
const {loginUser,forgetUser} =require('../controllers/user.js');
router.post('/login' ,loginUser);
module.exports=router;