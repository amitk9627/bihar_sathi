const Users = require("../model/user.js");
const loginUser = async (req, res) => {
  res.json({
    status: true,
  });
};
const forgetUser = async (req, res) => {
  res.json({
    status: true,
  });
};
module.exports = { loginUser ,forgetUser};
