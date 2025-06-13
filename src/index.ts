import express  from "express";
import 'dotenv/config'

const app = express()

const port = process.env.PORT ?? 3003

app.get("/" ,(req,res)=>{
    console.log("Acepta cambios rapidos")
    res.send("hola rapido" )
})
app.listen( port  ,()=> console.log(`Servidor escuchando en el puerto ${port}`))

