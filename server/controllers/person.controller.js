const Person = require("../models/pet.model");


module.exports.createPerson = async (req, res) => {
    try{console.log(req.body);
      const { body } = req;
      const newPerson = await Person.create(body);
      console.log(newPerson);
      res.json({
          message: 'Se ha creado de manera exitosa la nueva persona',
          newPerson
      });
    }catch(err){
      console.log(err);
      res.status(500).json({
        error: err,
        message: 'Ups, no hemos podido crear la persona'
      })
    }
  }

  module.exports.showAllThePerson= async (req, res) => {
    try{
      const fullListOfPerson = await Person.find()
      
      res.json({
        message: 'Se han traido de manera exitosa todos las personas',
        list: fullListOfPerson
      })
    }catch(err){
      res.status(500).json({
        error: err,
        message: 'Ups, no hemos podido traer todas las personas'
      })
    }
  }