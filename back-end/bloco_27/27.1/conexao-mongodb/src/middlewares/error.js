const authorError = (err, req, res, next) => {
  if (err.isJoi) {
    return res.status(400).json({ error: { message: err.details[0].message } });
  }

  const statusByErrorCode = {
    notFound: 404,
    alreadyExists: 409,
  };

  const status = statusByErrorCode[err.code] || 500;

  res.status(status).json({ error: { message: err.message } });
};

const bookError = (err, req, res, _next) => {
  if (err.isJoi) {
    return res.status(400).json({ error: { message: err.details[0].message } });
  }

  const statusByErrorCode = {
    notFound: 404,
    alreadyExists: 409,
  };

  const status = statusByErrorCode[err.code] || 500;

  res.status(status).json({ error: { message: err.message } });
};

module.exports = {
  authorError,
  bookError,
};
