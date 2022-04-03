const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET;
/**
 *
 * @param user
 * @returns {Promise<void>}
 */
const tokenSign = async (user) => {
  return await jwt.sign(
    {
      id: user._id,
      role: user.role
    },
    JWT_SECRET,
    {
      expiresIn: "2h"
    }
  );
}

/**
 *
 * @param jwtToken
 * @returns {Promise<null>}
 */
const verifyToken = async (jwtToken) => {
  try {
    return jwt.verify(jwtToken, JWT_SECRET);
  } catch (e) {
    console.log(e);
    return null;
  }
}

module.exports = {
  tokenSign,
  verifyToken
}