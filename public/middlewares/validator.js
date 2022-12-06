const  { validationResult } = require('express-validator') 


const User = require('../models/user.model')



const validatorPath = (req, res, next) => {


    const errors = validationResult(req)


    if (!errors.isEmpty()) {
        
        return res.status(400).json(errors)

    } 

    next()

}


const CorreoExiste = ( correo = '') => {

    const correoExiste = User.findOne( {correo} )

    if(!correoExiste){

        throw new Error('El correo ya existe en la base de datos')

    }




}

module.exports = {

    validatorPath,
    CorreoExiste

}





