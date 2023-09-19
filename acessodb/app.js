import app from "./db.js"

app.conecta.connect(function (erro){
    if (erro) throw erro
    console.log("Banco de dados conectado!")
})