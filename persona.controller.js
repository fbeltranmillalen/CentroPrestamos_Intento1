
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
    const {rut, nombre, apellido} = req.body;
    console.log(rut, nombre, apellido);
    const insertQuery = 'insert into persona (rut, nombre, apellido, castigado, id_carrera) values (?, ?, ?, ?, ?)';
    mySqlConnection.query(insertQuery, [rut, nombre, apellido, 0, 1], (err, rows, fields) => {
        if(!err){
            res.json({Status: 'Persona guardad'});
        } else{
            console.log(err);
        }
    });
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
    const {id} = req.params;
    const {rut, nombre, apellido} = req.body;
    const updateQuery = 'UPDATE persona SET rut = ?, nombre = ?, apellido = ?, castigado = ?, id_carrera = ? WHERE id = ?';
    mySqlConnection.query(updateQuery, [rut, nombre, apellido, 0, 1, id], (err, rows, fields) => {
        if(!err){
            res.json({Status: 'Persona Modificada'});
        } else{
            console.log(err);
        }
    });
    
}

personaController.deletePersona = (req, res) =>{
    const {id} = req.params;
    const deleteQuery = 'DELETE FROM persona WHERE id = ?';
    mySqlConnection.query(deleteQuery, [id], (err, rows, fields) => {
        if(!err){
            res.json({Status: 'Persona Eliminada'});
        } else{
            console.log(err);
        }
    });
}

module.exports = personaController;