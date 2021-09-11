const Joi = require('@hapi/joi');

const authorSchema = Joi.object({
  firstName: Joi.string().not().empty().required(),
  middleName: Joi.string().not().empty(),
  lastName: Joi.string().not().empty().required(),
});

module.exports = authorSchema;
