let express = require ("express");
let app = express ();

app.use(express.json());
app.use(express.urlencoded(extended,true));
//Create
app.post('/',function(req,res){
    res.send(`Te llamas ${req.body.name}`)
})
//Read
app.get('/', function (req,res){
    res.send("hola mundo")
});
//Update
app.put('/', function(req,res){
    res.send(`Has actualizado el regidtro número${req.body.id}`)
});

//Delete
app.delete('/user',function(req,res){
    res.send(`Has eliminado el registro: ${req.query.user}`);
});

let server = app.listen (8080, function(){
    let host = server.address().address;
    let port = server.address().port;

    console.log("Aplicación escuchando en http://$s:$s", host, port)
});

