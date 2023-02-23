const {Schema, model} = require('mongoose');

const PetSchema = new Schema({
    name:{
        type: String,
        required: [true, 'Debe ingresar un nombre'],
        minlength: [3, 'No puede tener menos de 3 caracteres']
    },
    type:{
        type: String,
        required: [true, 'Debe ingresar un type'],
        minlength: [3, 'No puede tener menos de 3 caracteres']
    },
    description:{
        type: String,
        required: [true, 'Debe ingresar una descripción'],
        minlength: [3, 'No puede tener menos de 3 caracteres'],
    },
    phoneNumber:{
        type: String,
        required: [true, 'Debe ingresar un número telefonico'],
        maxlength: [15, 'No debe exceder las 15 cifras']
    },
    direction:{
        type: String,
        required:[true, 'Debe ingresar una dirección'],
        minlength: [3, 'No puede tener menos de 3 caracteres']
    },
    raza:{
        type: String,
        required:[true, 'Debe ingresar la raza'],
        minlength: [1, 'No puede tener menos de 2 caracter']
    },
    imagen:{
        type: String, //URL
        required: [true, "Debe ingresar una imagen"]
    }

}, {timestamps: true});
/*
const PersonSchema = new Schema({
    email:{
        type: String,
        required: [true, 'Debe ingresar un email'],
        minlength: [3, 'No puede tener menos de 3 caracteres']
    },
    edad:{
        type: Number,
        required: [true, 'Debe ingresar una edad'],
    },
    username:{
        type: String,
        required: [false, 'Ingrese un username'],
        minlength: [3, 'No puede tener menos de 3 caracteres'],
    },
    password:{
        type: String,
        required: [true, 'Debe ingresar una contraseña'],
        minlength: [3, 'No puede tener menos de 3 caracteres'],
    },
    confirmpassword:{
        type: String,
        required:[true, 'Deben de escribir la confirmpassword'],
        minlength: [3, 'No puede tener menos de 3 caracteres']
    }

}, {timestamps: true});
*/
const Pet = model('Pet', PetSchema)
//const Person = model('Person', PersonSchema)
module.exports = Pet;
//module.exports = Person;