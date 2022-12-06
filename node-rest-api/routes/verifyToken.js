const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const authHeader = req.headers.token;
  console.log(authHeader);
  if (authHeader) {
    const token = authHeader.split(" ")[1];
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
      if (err) {
        res.status(403).json("Token is not valid");
      }
      req.user = user;
      next();
    });
  } else {
    return res.status(401).json("You are not authenticated111");
  }
};

const verifyTokenAndAuthoriation = (req, res, next) => {
  verifyToken(req, res, next,() => {
    if (req.user.id === req.params.id || req.user.role === 1) {
      next();
    } else {
      res.status(403).json("You are not allowed to do");
    }
  });
};

const verifyTokenAndAdmin = (req, res, next) => {
  verifyToken(req, res, () => {
    console.log(req.user.role);
    if (req.user.role === 1) {
      next();
    } else {
      res.status(403).json("You are not alowed to do that!");
    }
  });
};

module.exports = {
  verifyToken,
  verifyTokenAndAuthoriation,
  verifyTokenAndAdmin,
};
