import conexao from "./db.js"

conexao.conecta.query("select * from produto", function(erro,result){
    if (erro) throw erro
    console.log(result)
})