const Joi = require('@hapi/joi');

const userSchema = Joi.object({
  firstName: Joi.string().not().empty().required().messages({
    'string.base': `firstName deve ser uma 'string'`,
    'string.empty': `o campo "firstName" não pode ser vazio`,
    'any.required': `o campo "firstName" é obrigatório`,
  }),
  lastName: Joi.string().not().empty().required().messages({
    'string.base': `firstName deve ser uma 'string'`,
    'string.empty': `o campo "lastName" não pode ser vazio`,
    'any.required': `o campo "lastName" é obrigatório`,
  }),
  email: Joi.string().not().empty().required().email().messages({
    'string.base': `firstName deve ser uma 'string'`,
    'string.email': `o campo email deve ter o formato de 'email'`,
    'string.empty': `o campo "email" não pode ser vazio`,
    'any.required': `o campo "email" é obrigatório`,
  }),
  password: Joi.string().min(6).required().messages({
    'string.min': "O campo 'password' deve ter pelo menos 6 caracteres",
    'string.empty': `o campo "password" não pode ser vazio`,
    'any.required': `o campo "password" é obrigatório`,
  }),
});

// const userSchema = Joi.object({
//   firstName: Joi.string().required(),
//   lastName: Joi.string().required(),
//   email: Joi.string().email().required(),
//   password: Joi.string().min(6).required(),
// }).messages({
//   'any.required': 'O campo {
// {: id="label" }} é obrigatório',
//   'string.min': 'O campo {
// {: id="label" }} deve ter, pelo menos, {
// {: id="limit" }} caracteres',
//   'string.email': 'Informe um email válido no campo {
// {: id="label" }}',
// });

module.exports = userSchema;
