const express = require("express")
const app = express()

app.listen(8081, function(){
    console.log("servidor rodando na porta 8081")
})

app.get("/", function(req, res){
    res.send("Node js")
})

app.get("/cadastrar/:produto", function(req, res){
    res.send("Item: " + req.params.produto)
})

app.get("/pesquisar/:produto/:modelo", function(req, res){
    res.send("produto: "+ req.params.produto + "<br> modelo: "+
    req.params.modelo)
})
app.get("/contato/:sac/:produto", function(req, res){
    res.send("sac: "+ req.params.sac + "<br> produto: "+
    req.params.produto)
})