const Users = require("../model/user.js");
const createUser = async (req, res) => {
  const body = req.body;
  const requiredFields = ["name", "email", "password"];
  for (let key of requiredFields) {
    if (!body[key]) {
      return res.json({
        message: `Missing or null value of ${key}`,
      });
    }
  }
  const { email, password, name } = req.body;
  const user = {
    email,
    password,
    name,
  };
  try {
    const result = await Users.create(user);
    if (!result) {
      return res.status(404).json({
        message: `User created successfully`,
      });
    }
    return res.json({
      message: "User Can't created",
    });
  } catch {
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};
const loginUser = async (req, res) => {
  const body = req.body;
  const requiredFields = ["name", "email"];
  for (let key of requiredFields) {
    if (!body[key]) {
      return res.json({
        message: `Missing or null value of ${key}`,
      });
    }
  }
  const { email, password } = req.body;
  const user = {
    email,
    password,
  };
  try {
    const result = await Users.findOne({ email: email });
    if (!result) {
      return res.status(404).json({
        message: `User created successfully`,
      });
    }
    if(result.password!==password){
      return res.status(401).json({
        message: `User password not match`,
      });
    }
    return res.json({
      message: "User Can't found",
    });
  } catch {
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};
const forgetUser = async (req, res) => {
  res.json({
    status: true,
  });
};
module.exports = { loginUser, forgetUser };
