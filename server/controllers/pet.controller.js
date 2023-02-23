const Pet = require("../models/pet.model");

module.exports.showAllThePets= async (req, res) => {
  try{
    const fullListOfPets = await Pet.find()
    
    res.json({
      message: 'Se han traido de manera exitosa todos las mascotas',
      list: fullListOfPets
    })
  }catch(err){
    res.status(500).json({
      error: err,
      message: 'Ups, no hemos podido traer todas las mascotas'
    })
  }
}

module.exports.createPet = async (req, res) => {
    try{console.log(req.body);
      const { body } = req;
      const newPet = await Pet.create(body);
      console.log(newPet);
      res.json({
          message: 'Se ha creado de manera exitosa la nueva mascota',
          newPet
      });
    }catch(err){
      console.log(err);
      res.status(500).json({
        error: err,
        message: 'Ups, no hemos podido crear la mascota'
      })
    }
  }
  module.exports.deletePet= async (req, res) => {
    try{
        const { params } = req;
        console.log(params._id);
    const deletePet = await Pet.deleteOne({_id: params._id })
    const fullListOfpets = await Pet.find()
    res.json({
        message: "Se ha borrado la mascota de manera exitosa",
        deletePet,
        list: fullListOfpets
    })
    }catch(err){
        res.status(500).json({
            error: err,
            message: 'Ups, no hemos podido borrar la mascota'
    })
    }
    
  }

  module.exports.updatePet = async (req, res) => {
    try{
      const { body, params } = req;
        console.log(body);
        const updatePet = await Pet.findByIdAndUpdate(
          
          {_id: params._id},
          body,
          {new: true, runValidators: true}
        )
        res.json({
        message: "Se ha modificado la mascota exitosamente",
        updatePet,
    })
    }catch(err){
      console.log(err);
      res.status(500).json({
        
        error: err,
        message: 'Ups, no hemos podido actualizar la mascota'
      })
    }
  }

  module.exports.findOneSinglePet = (req, res) => {
    Pet.findOne({ _id: req.params.id })
        .then(oneSinglePet => res.json({ pet: oneSinglePet }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
};

