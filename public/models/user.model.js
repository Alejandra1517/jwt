const { Schema, model } = require('mongoose')


const modelUser = new Schema({



    documento:{

        type:Number,
        required:['El documento es obligatorio']


    },



    nombre:{

        type:String,
        required:['El nombre es obligatorio']


    },

    
    contrasena:{

        type:String,
        required:['La contraseña es obligatoria']


    },

    correo:{

        type:String,
        required:['El correo es obligatorio'],
        uniqued:true


    }


})

module.exports = model('user', modelUser)