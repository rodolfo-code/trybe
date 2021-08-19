const UserModel = require('../models/User');

const isRoleValid = (role, validRoles) => validRoles.includes(role);

const isEmailValid = (email) => {
  // eslint-disable-next-line operator-linebreak
  const emailRegex =
    /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
  return emailRegex.test(email);
};

const isPasswordValid = (password) => {
  const passwordRegex = /^\d+$/;
  return passwordRegex.test(password);
};

const isUserValid = ({ email, password, role }, validRoles) =>
  isEmailValid(email)
  && isPasswordValid(password)
  && isRoleValid(role, validRoles);

// eslint-disable-next-line max-lines-per-function
const createUser = async (connection, user, validRoles) => {
  const { username, email, password, role } = user;
  if (!isUserValid(user, validRoles)) {
    return {
      ok: false,
      error: {
        code: 'invalid_data',
        message: 'User data is not valid!',
      },
    };
  }

  return UserModel.create(connection, { username, email, password, role })
    .then((result) => ({
      ok: true,
      result,
    }))
    .catch((err) => ({
      ok: false,
      error: {
        code: 'internal_error',
        message: err.message,
      },
    }));
};

const getUserService = (validRoles) => ({
  createUser: (user) => createUser(user, validRoles),
  
});

module.exports = {
  createUser,
  getUserService,
};
