const { Router } = require('express')
const { check } = require('express-validator')

const { postUser, getUser, putUser, deleteUser } = require('../controllers/user.controller')
const { validatorPath, CorreoExiste } = require('../middlewares/validator')

const { validatorJwt } = require('../middlewares/validatorJwt')

const routes = Router()


routes.get('/', [
    validatorJwt
],
getUser)

routes.post('/', [

    check('correo').custom( CorreoExiste ),
    validatorPath


],  postUser)

routes.put('/:id', putUser)

routes.delete('/:id', deleteUser)


module.exports = routes