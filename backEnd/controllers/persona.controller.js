const personaController = {};

personaController.getPersonas = (req, res) => {
    res.json({
        status: 'Persona va aca'
    });
}

module.exports = personaController;