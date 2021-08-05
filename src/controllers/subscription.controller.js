const submitService = require('../services/subscription/submit');

const controller = {
  submit: (req, res) => {
    const { body } = req;

    submitService(body);

    return res.json({ status: 'received!' });
  },
};

module.exports = controller;
