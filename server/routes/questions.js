const express = require('express');
const router = express.Router();
const db = require('../config/database');
const Question = require('../models/Question');

router.get('/', (req, res) =>
	Question.findAll()
		.then((questions) => {
			res.status(200).send(questions);
		})
		.catch((err) => console.log(err))
);

router.get('/add', (req, res) => {
	const data = {
		value: 'What is the airspeed velocity of an unladen swallow?',
		answer: 'Not sure',
		module_id: 1
	};

	let { value, answer, module_id } = data;

	// Insert
	Question.create({
		value,
		answer,
		module_id
	})
		.then((question) => res.sendStatus(200))
		.catch((err) => console.log(err));
});

// Create
router.post('/', (req, res) => {
	var question = req.body;
	console.log('question', question);
	const { value, answer, module_id } = question;
	console.log('value', value);
	Question.create({
		value,
		answer,
		module_id
	})
		.then((question) => res.sendStatus(200))
		.catch((err) => console.log(err));
});

// Delete
router.delete('/:_id', (req, res) => {
	const id = req.params._id;
	Question.destroy({ where: { id } }).then((question) => res.sendStatus(200)).catch((err) => console.log(err));
});

// Update
router.put('/:_id', (req, res) => {
	const id = req.params._id;
	const question = req.body;
	Question.update(question, { where: { id } })
		.then((question) => res.sendStatus(200))
		.catch((err) => console.log(err));
});

module.exports = router;
