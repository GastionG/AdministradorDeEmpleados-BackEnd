const { Router } = require('express')
const router = Router()

const empleados = require('../controllers/empleados')

router.get('/', empleados.getEmps)
router.get('/:id', empleados.getEmp)
router.put('/:id', empleados.editEmp)
router.post('/', empleados.createEmp)
router.delete('/:id', empleados.deleteEmp)

module.exports = router