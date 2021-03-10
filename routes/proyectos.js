// Rutas para crear proyectos
const router = require('express').Router()
const proyectoController = require('../controllers/proyectoController')
const auth = require('../middleware/auth')
const { check } = require('express-validator')

// Crear proyecto
// /api/proyectos
router.post('/',    
    auth,
    [
        check('nombre', 'El nombre es obligatorio').not().isEmpty()
    ],
    proyectoController.crearProyecto
)

// Listar proyectos
// /api/proyectos
router.get('/',    
    auth,
    proyectoController.obtenerProyectos
)

// Actualizar proyecto por ID
// /api/proyectos
router.put('/:id',    
    auth,
    [
        check('nombre', 'El nombre es obligatorio').not().isEmpty()
    ],
    proyectoController.actualizarProyecto
)

// Eliminar proyecto por ID
// /api/proyectos
router.delete('/:id',    
    auth,
    proyectoController.eliminarProyecto
)

module.exports = router