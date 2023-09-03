const express = require("express")
const app = express()
const mysql = require("mysql2")

// Conexão com o mysql
const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "1234",
    database: "crud"
})

app.use(express.json())

// Rota create
app.post("/create", (req, res) => {

    const {nome} = req.body;
    const {idade} = req.body;
    const {telefone} = req.body; 

    let mysql = "INSERT INTO usuarios (nome, idade, telefone) VALUES (?,?,?)";

    db.query(mysql, [nome, idade, telefone], (err, result) => {
        res.send(result);
    })

})

// Rota Read
app.get("/read", (req,res)=> {

    let mysql = "SELECT * FROM usuarios";
    db.query(mysql, (err, result)=>{
        if (err) {
            console.log(err);
          } else {
            res.send(result);
          }
    })
})



app.listen(3001, ()=> {
    console.log("server on!!!")
})