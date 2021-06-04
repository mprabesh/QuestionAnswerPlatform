const jwt = require("jsonwebtoken");
const secret_key = "ajshdja763g37dhjs623ghwdwtdw67676d7w";

const authenticateJWT = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (authHeader) {
    const token = authHeader.split(" ")[1];
    const a = "apple";

    jwt.verify(a, secret_key, (err, user) => {
      if (err) {
        return res.sendStatus(403);
      }
      console.log("Gut Token");
      req.user = user;
      next();
    });
  } else {
    res.sendStatus(401);
  }
};

module.exports = authenticateJWT;
