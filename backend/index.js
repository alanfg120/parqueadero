var express    = require('express');
var app        = express();
var cors       = require("cors");
var expressJwt = require("express-jwt");

app.use(cors());
app.use(express.static(__dirname + "/dist"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//app.use(expressJwt({ secret: "jwtClave", requestProperty: "token" }).unless({path: ["/usuarios/login"]}));
app.use((err, req, res, next) => {
  if (err.name === "UnauthorizedError") {
    res.status(401).send("No autorizado")
  }
});


app.use("/ingresos"    , require("./api/ingresos"));
app.use("/usuarios"    , require("./api/usuarios"));




app.listen(3000,async ()=>{
  console.log('Server Ready');


}); 