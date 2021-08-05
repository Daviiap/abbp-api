const schema = require('./submitBody.schema');

const validator = {
  submit: (req, res, next) => {
    const validation = schema.validate(req.body);
    if (validation.error) {
      return res.status(400).json(validation.error.details);
    }
    next();
  },
};

module.exports = validator;
