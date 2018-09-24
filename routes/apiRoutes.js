const Items = require('../models/Item');

const errorSend = (err, res) => {
  if (err) {
    res.statusCode = 500;
    res.send(err);
  }
};

module.exports = (app) => {

  // @route GET api/items
  // @desc Get all items
  // @access Public
  app.get('/api/items', (req, res) => {
    Items.find()
      .sort({ date: -1 })
      .then(items => {
        res.json(items);
      })
      .catch(err => errorSend(err, res));
  });

  // @route POST api/items
  // @desc Post a new item
  // @access Public
  app.post('/api/items', (req, res) => {
    const newItem = new Items({
      name: req.body.name
    });
    newItem.save().then(item => res.json(item)).catch(err => errorSend(err, res));
  });

  // @route POST api/items
  // @desc Post a new item
  // @access Public
  app.delete('/api/items/:id', (req, res) => {
    Items.findById(req.params.id)
      .then(item => item.remove().then(() => res.sendStatus(200)).catch(err => errorSend(err, res)))
      .catch(err => errorSend(err, res));
  });
};