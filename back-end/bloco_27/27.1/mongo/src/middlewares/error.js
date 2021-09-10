module.exports = (err, req, res, next) => {
  if (err.status) {
    return res.status(err.stauts).json({ message: err.message });
    // res.json({ error: err.error, message: err.message });
  }

  if (err.isJoi) {
    return res
      .status(422)
      .json({ error: true, message: err.details[0].message });
  }

  console.error(err);
  // Retornamos o status 500 Internal Server Error, e uma mensagem avisando que houve um erro.
  res.status(500).json({ message: 'Erro interno do servidor' });
};
