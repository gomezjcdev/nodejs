const { handleHttpError } = require("../utils/handleError");

/**
 * roles
 * @param roles
 * @returns {(function(*, *, *): void)|*}
 */
const checkRole = (roles) => (req, res, next) => {
  try {
    const { user } = req;
    const rolesByUser = user.roles;

    if (!roles.some((rol) => rolesByUser.includes(rol))) {
      handleHttpError(res, 'USER_NOT_PERMISSIONS', 403);
      return;
    }

    next();
  } catch (e) {
    handleHttpError(res, e, 403);
  }
}

module.exports = {
  checkRole
}