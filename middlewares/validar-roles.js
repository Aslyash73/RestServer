const { response } = require("express")


const esAdminRole = (req, res = response, next) =>{

    if(!req.usuario){
   return req.status(500).json({
    msg: 'Se requere verificar el role sin validar el token primero'
   });
    }

    const {rol, nombre} = req.usuario;
    if(rol !== 'ADMIN_ROLE'){
        return res.status(401).json({
            msg: `${nombre} no es administrador - No puede hacer esto`
        });
    }
    next();
}

module.exports = {
    esAdminRole
}