const empleadosController = {}

const Empleado = require('../models/empleado')

empleadosController.getEmp = async (req, res)=>{
    const empleado = await Empleado.findOne({_id: req.params.id})
    if(empleado == null){
        res.send({'message' : 'el empleado no existe'})
    }
    else{
        res.send({'message' : 'informacion de empleado', empleado})
    }
    
    console.log(empleado);
}

empleadosController.getEmps = async (req, res)=>{
    const empleados = await Empleado.find()
    res.json(empleados)
}

empleadosController.createEmp = async (req, res)=>{

    const empleadoNuevo = new Empleado(req.body)
    await empleadoNuevo.save()
    res.send({'message': 'Empleado registrado'})
}

empleadosController.editEmp = async (req, res)=>{
    const empleado = await Empleado.findOneAndUpdate({_id: req.params.id}, req.body)
    res.send({'mensaje': 'Empleado actualizado'})
}

empleadosController.deleteEmp = async (req, res)=>{
    const empleado = await Empleado.findOneAndDelete({_id: req.params.id})
    res.send({'message': 'empleado eliminado', empleado})

}

module.exports = empleadosController