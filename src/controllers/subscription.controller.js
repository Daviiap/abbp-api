const controller = {
  submit: (req, res) => {
    const { body } = req;

    console.log(body);

    return res.json({ status: 'received!' });
  },
};

module.exports = controller;
