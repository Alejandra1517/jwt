const jwt = require('jsonwebtoken')



const generateJwt = async (documento, nombre, correo) => {


    const payload = { documento, nombre, correo }


    return new Promise( (resolve, reject) => {


        jwt.sign(payload, process.env.SECRETKEY, {

            expiresIn: '50m'



        }, (err, token)=>{

            if (err) {

                reject("Error al generar el token")
                
            }else{

                resolve(token)

            }


            
        }
        
        ) 


    })



}


module.exports = {

    generateJwt


}


