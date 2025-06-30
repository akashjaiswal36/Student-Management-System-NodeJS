const express = require('express');
const router  = express.Router();
const Student = require('../models/student');

// GET all
router.get('/', async (_, res) => {
  res.json(await Student.findAll());
});

// GET by id
router.get('/:id', async (req, res) => {
  const s = await Student.findByPk(req.params.id);
  s ? res.json(s) : res.sendStatus(404);
});

// POST create (201)
router.post('/', async (req, res) => {
  const { id, name, course } = req.body;
  const created = await Student.create({ id, name, course });
  res.status(201).json(created);
});

// DELETE
router.delete('/:id', async (req, res) => {
  await Student.destroy({ where: { id: req.params.id }});
  res.sendStatus(200);
});

module.exports = router;
