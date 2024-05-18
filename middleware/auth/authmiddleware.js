const jwt = require("jsonwebtoken");

const authHandler = (req, res, next) => {
  const tokenKey = process.env.JWT_SECRET_KEY;

  let token = req.header("Jwt");
  
  if (token === undefined ) {
    res.json({ mess: "token not define", status: false });
  } else {
    jwt.verify(token, tokenKey, (err, ress) => {
      if (err) {
        res.json({ mess: err.message, status: false, expire: true });
      } else {
        let id = ress.id;
        // console.log(ress);
        req.headers = { ...req.headers, id };
        next();
      }
    });
  }
};

module.exports = authHandler;
