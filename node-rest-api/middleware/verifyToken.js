const jwt = require("jsonwebtoken");

var dataToken = {};
// token check thông tin người dùng
const verifyToken = (req, res, next) => {
  const token = req.body.header;
  if (token) {
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
      if (err) {
        return res.status(403).json("Token is not valid");
      }
      dataToken = user;
      next();
    });
  } else {
    return res.status(401).json("You are not authenticated111");
  }
};
// token cho admin và nhân viên chỉnh thông tin cá nhân
const verifyTokenAndAuthoriation = (req, res, next) => {
  if (dataToken.id === req.params.id || dataToken.role === 1) next();
  else return res.status(401).json("You are not allow to do this action!");
};

const verifyTokenAndUpdate = (req, res, next) => {
  if (dataToken.role !== 3) next();
  else return res.status(401).json("You are not allow to do this action!");
};

module.exports = {
  verifyToken,
  verifyTokenAndAuthoriation,
  verifyTokenAndUpdate,
};
