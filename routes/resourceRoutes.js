const router = require('express').Router();

const db = require('./resourceModel');

router.get('/', async (req, res) => {
  const resources = await db.getResources();
  res.status(200).json(resources);
});

router.post('/', async (req, res) => {
  try {
    const newResourceData = req.body;
    const newResource = await db.addResource(newResourceData);

    res.status(201).json(newResource);
  } catch (err) {
    res.status(500).json({ message: 'Could not add resource' });
  }
});

module.exports = router;