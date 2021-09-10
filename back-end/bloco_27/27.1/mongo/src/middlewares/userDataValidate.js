const userSchema = require('../schemas/userSchema');

module.exports = async (req, _res, next) => {
  const { firstName, lastName, email, password } = req.body;
  const { error } = userSchema.validate({
    firstName,
    lastName,
    email,
    password,
  });

  if (error) {
    return next(error);
  }

  next();
};
