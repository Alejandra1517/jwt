const { request, response } = require('express')

const bcrypt = require('bcrypt')

const User = require('../models/user.model')

const { generateJwt } = require('../helpers/jwt')



const postAuth = async (req = request, res= response) => {

    const { correo, contrasena } = req.body

    try {
        
        const Usuario = await User.findOne( { correo } )

        if (!Usuario) {

            return res.status(400).json({
                msg: "El usuario no existe en la base de datos"
            })
            
        }

        const compareContrasena = bcrypt.compareSync(contrasena, Usuario.contrasena)
        if (!compareContrasena) {

            return res.status(400).json({
                mgs: "La contraseña no coincide"
            })
            
        }

        const token = await generateJwt(

            Usuario.documento,
            Usuario.nombre,
            Usuario.correo


        )


        res.json({

            ok:"ok",
            token


        })



        

    } catch (error) {

        res.status(500).json({
            msg: "Error 500! comuniquese con el administrador"
        })
        
    }






}


module.exports = {

    postAuth

}