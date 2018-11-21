const express = require('express');
const router = express.Router();

const personaController = require('../controllers/persona.controller');

router.get('/', personaController.getPersonas);
router.post('/', personaController.createPersona);
router.get('/:id', personaController.getPersona);
router.put('/:id', personaController.editPersona);
router.delete('/:id', personaController.deletePersona);


module.exports = router;