const { response } = require('express');


const usuariosGet = (req= request, res = response) => {

    const {q, nombre='No name', apikey} = req.query;
    res.json({
        msg: 'getApi-controlador',
        q,
        nombre,
        apikey
    });
}

const usuariosPut = (req, res=response) => {

    const id = req.params.id;
    res.json({
        msg: 'putApi-controlador',
        id
    });
}

const usuariosPost = (req, res=response) => {

    const {nombre, edad} = req.body;
    res.json({
        msg: 'postApi-controlador',
        nombre,
        edad
    });
}

const usuariosDelete = (req, res=response) => {
    res.json({
        msg: 'deleteApi-controlador'
    });
}

const usuariosPatch = (req, res=response) => {
    res.json({
        msg: 'postPatch-controlador'
    });
}

module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete,
    usuariosPatch
}