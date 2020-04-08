const express = require('express');
const router = express.Router();
const db = require('../config/database');
const Module = require('../models/Module');

router.get('/', (req, res) =>
	Module.findAll()
		.then((modules) => {
			res.status(200).send(modules);
		})
		.catch((err) => console.log(err))
);

module.exports = router;
