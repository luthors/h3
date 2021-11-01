const express = require('express')
const cors = require('cors')

class Server {

    constructor(){
        this.app = express()
        this.port= process.env.PORT
        this.usuariosPath='/api/usuarios'

        //middlewares()
        this.middlewares();
        

        //rutas de la APP
        this.routes();

       
    }

    middlewares(){
        //CORS
        this.app.use(cors())

        //lectura y parseo
        this.app.use(express.json())

        // directorio publico
        this.app.use(express.static('public'))
        
    }
 

 
    routes(){
        this.app.use(this.usuariosPath, require('../routes/usuarios'))
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log("Servidor conectado")
        })
    }

}

module.exports = Server