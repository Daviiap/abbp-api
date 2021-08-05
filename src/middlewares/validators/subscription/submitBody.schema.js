const Joi = require('joi');

const address = Joi.object({
  street: Joi.string().required(),
  number: Joi.string().required(),
  city: Joi.string().required(),
  district: Joi.string().required(),
  complement: Joi.string().allow('', null),
  postalCode: Joi.string().required(),
  country: Joi.string().required(),
});
const phoneNumber = Joi.object({
  ddi: Joi.string().required(),
  ddd: Joi.string().required(),
  number: Joi.string().required(),
});
const whatsApp = Joi.object({
  ddi: Joi.string().required(),
  ddd: Joi.string().required(),
  number: Joi.string().required(),
});

module.exports = Joi.object({
  name: Joi.string().required(),
  category: Joi.string().required(),
  sponsorship: Joi.string().required(),
  address,
  phoneNumber,
  email: Joi.string().required(),
  whatsApp,
  instagram: Joi.string().required(),
  responsibilityTermsChecked: true,
  time: 3513513131,
});
