// Rutas para autenticar usuarios
const router = require('express').Router()
const { check } = require('express-validator')
const authController = require('../controllers/authController')
const auth = require('../middleware/auth');

// Iniciar sersion
// /api/auth
router.post('/', 
    [
        check('email', 'Agrega un email valido').isEmail(),
        check('password', 'El password debe ser minimo de 5 caracteres').isLength({ min: 6 })
    ],
    authController.autenticarUsuario
)

// Obtiene al usuario autenticado
router.get('/',
    auth,
    authController.usuarioAutenticado
)

module.exports = router