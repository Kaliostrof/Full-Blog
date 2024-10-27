const JWT = require("jsonwebtoken");

const sign = process.env.JWT_SECRET;

module.exports = {
  generate(data) {
    return JWT.sign(data, sign, { expiresIn: "30d" });
  },
  verify(token) {
    return JWT.verify(token, sign);
  },
};
