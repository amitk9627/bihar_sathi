const Users = require("../model/user.js");
const createUser = async (req, res) => {
  const requestBody = req.body;
  const requiredFields = ["name", "email", "password"];
  for (let key of requiredFields) {
    if (!requestBody[key]) {
      return res.json({
        message: `Missing or null value of ${key}`,
      });
    }
  }

  const { email, password, name } = req.body;
  const user = {
    name:name,
    email:email,
    password:password,
  };
  try {
    // add  user
    const result = await Users.create(user);
    console.log("User Created successfully");
    res.json({
      status:true,
      message: "User created successfully",
      res: result,
    });
  } catch (e) {
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
      return res.json({
        status: false,
        message: "User Can't found",
      });
    }
    if (result.password !== password) {
      return res.status(401).json({
        status: true,
        message: `Worng password`,
      });
    }
    return res.status(404).json({
      message: `User created successfully`,
    });
  } catch {
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};
const forgetUser = async (req, res) => {
  const { email, newpassword } = req.body;
  const userFound = await Users.findOne({ email: email });
  if (!userFound) {
    return res.json({
      status: false,
      message: "User Can't found",
    });
  }
  res.json({
    status: userFound,
  });
};
module.exports = { createUser, loginUser, forgetUser };
