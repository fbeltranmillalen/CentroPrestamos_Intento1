const express = require('express');
const router = express.Router();

const personaController = require('../controllers/persona.controller');

router.get('/', personaController.getPersonas);

module.exports = router;