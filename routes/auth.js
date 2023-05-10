
const { Router } = require('express');
const { validarCampos } = require('../middlewares/validar-campos');

const { check } = require('express-validator');
const { login } = require('../controllers/auth');

const router = Router();

router.post('/login', [
        check('correo', 'El correo es requerido!').isEmail(),
        check('password', 'La contraseña es requerida!').not().isEmpty(),
        validarCampos
],login);



module.exports = router;