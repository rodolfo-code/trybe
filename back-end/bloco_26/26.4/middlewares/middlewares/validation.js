const isValidUsername = (req, res, next) => {
  const { username } = req.body;

  if (!username || username.length <= 3) {
    return res.status(400).json({ message: 'invalid data' });
  }

  next();
};

const isValidEmail = (req, res, next) => {
  const { email } = req.body;

  if (!email || !email.includes('@') || !email.includes('.com'))
    return res.status(400).json({ message: 'invalid data' });

  next();
};

const isValidPassword = (req, res, next) => {
  const { password } = req.body;
  const passwordRegex = /^[0-9]*$/;

  if (
    password.length < 3 ||
    password.length > 8
    // !password.test(passwordRegex)
  )
    return res.status(400).json({ message: 'invalid data' });

  next();
};

module.exports = {
  isValidEmail,
  isValidPassword,
  isValidUsername,
};
