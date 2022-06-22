require('./database')

const app = require('./app')

app.get('/', (req, res)=>{
    res.send("Bienvenido pibe")
})

app.listen(app.set('port'), ()=>{
    console.log("Servidor funcionando en el puerto 4000");
})