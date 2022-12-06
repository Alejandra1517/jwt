
const bcrypt = require('bcryptjs')
const User = require('../models/user.model')


const getUser = async (req, res) => {

    const allUsers =  await User.find()

    res.json({

        ok: 200,
        allUsers

    })

}


const postUser = async (req, res) => {

    const { documento, nombre, contrasena, correo } =  req.body

    const saveUser = new User( { documento, nombre, contrasena, correo } )

    saveUser.contrasena = bcrypt.hashSync(contrasena, 10)

    await saveUser.save()

    res.json({

        ok: 200,
        msg: "Usuario guardado correctamente"

    })

}


const putUser = async (req, res) => {

    const id = req.params.id

    const user =  req.body

    const editUser = User.findByIdAndUpdate(id, user)

    res.json({

        ok: 200,
        msg: "Usuario editado correctamente"

    })

}


const deleteUser = async (req, res) => {

    const  id = req.params.id

    const deleteUser = User.findByIdAndDelete(id)

    res.json({

        ok: 200,
        msg: "Usuario eliminado correctamente"

    })

}


module.exports = {

    getUser,
    postUser,
    putUser,
    deleteUser


}



