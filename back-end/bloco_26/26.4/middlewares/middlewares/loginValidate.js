const validEmail = (req, res, next) => {
  const { email } = req.body;

  const regEmail = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
  const isValid = regEmail.test(email);

  console.log(isValid);

  if (!isValid) {
    return res.status(400).json({ message: 'email or password is incorrect' });
  }

  next();
};

const validPassword = (req, res, next) => {
  const { password } = req.body;

  const passwordRegex = /^[0-9]*$/;

  if (
    password.length < 3 ||
    password.length > 8 ||
    !password.match(passwordRegex)
  )
    if (!password || password.length < 4 || password.length > 8) {
      return res
        .status(400)
        .json({ message: 'email or password is incorrect' });
    }

  next();
};

module.exports = {
  validEmail,
  validPassword,
};
