const jwt = require("jsonwebtoken");

const generateToken = (user) => {
  const payload = {
      id: user.id,
      username: user.username,
    },
    options = {
      expiresIn: "6h",
    };

  return jwt.sign(payload, "secret", options);
};

const verifyToken = (req, res, next) => {
  const token = req.headers.authorization;
  if (token) {
    jwt.verify(token, "secret", (err, decodedToken) => {
      if (err) {
        res.status(401).json({
          message: "Invalid permission, please contact an administrator",
        });
      } else {
        req.decodedJwt = decodedToken;
        next();
      }
    });
  }
};

module.exports = {
  generateToken,
  verifyToken,
};
