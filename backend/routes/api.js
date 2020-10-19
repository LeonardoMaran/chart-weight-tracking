const express = require('express');
const router = express.Router();
const Dog = require('../models/Mochi');

router.get('/', async (req, res) => {
  try {
    const items = await Dog.find();
    res.json(items);
  } catch (err) {
    res.json({ message: err })
  }
});

router.post('/', async (req, res) => {
  const item = new Dog({
    name: req.body.name,
    weight: req.body.weight,
    date: req.body.date
  })
  try {
    const savedItem = await item.save();
    res.json(savedItem);
  } catch (err) {
    res.json({ message: err });
  }
});

router.get('/:itemId', async (req, res) => {
  try {
    const item = await Dog.findById(req.params.itemId);
    res.json(item);
  } catch (err) {
    res.json({ message: err })
  };
})

router.delete('/:itemId', async (req, res) => {
  try {
    const removedItem = await Dog.deleteOne({ _id: req.params.itemId });
    res.json(removedItem);
  } catch (err) {
    res.json({ message: err })
  }
})

module.exports = router;