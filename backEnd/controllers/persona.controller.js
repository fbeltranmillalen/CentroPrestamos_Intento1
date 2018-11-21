
const personaController = {};
const mySqlConnection = require('../database');

personaController.getPersonas = (req, res) => {
   mySqlConnection.query('SELECT * FROM persona', (err, rows, fields) =>{
       if(!err){
           res.json(rows);
       } else{
           console.log(err);
       }
   });
   //mySqlConnection.end();
};

personaController.createPersona = (req, res) =>{
    
}

personaController.getPersona = (req, res) =>{
    const {id} = req.params;
    mySqlConnection.query('SELECT * FROM persona WHERE id = ?', [id], (err, rows, fields) => {
        if(!err){
            res.json(rows);
        }
        else{
            console.log(err);
        }
    })
    
}

personaController.editPersona = (req, res) =>{
    
}

personaController.deletePersona = (req, res) =>{
    
}

module.exports = personaController;