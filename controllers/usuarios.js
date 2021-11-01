const { response, request } = require('express')

const usuariosGet = (req = request, res=response)=> {
    // const usuario= req.body
    res.json({
        msg:'GET'
    })
}

const usuariosDelete= (req = request, res=response)=>{
    // const usuario= req.body
    res.json({
        msg:'DEL'

    })
}

const usuariosPost= (req, res)=>{
    // const usuario= req.query
    res.json({
        msg:'POST'
    })
}

const usuariosPut= (req, res)=>{
    // const usuario= req.query
    res.json({
        msg:'PUT'

    })
}


//GET POST PUT DELETE   CRUD



module.exports = {
    usuariosGet, 
    usuariosDelete,
    usuariosPost,
    usuariosPut
}