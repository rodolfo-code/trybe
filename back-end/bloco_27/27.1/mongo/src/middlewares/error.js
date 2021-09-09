module.exports = (err, req, res, next) => {
  if (err.isJoi) {
    return res
      .status(422)
      .json({ error: true, message: err.details[0].message });
  }

  res.json({ error: err.error, message: err.message });
};
