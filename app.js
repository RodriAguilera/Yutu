const express = require ('express');
const app = express();

const port = process.env.PORT || 3000;


// Motor de plantilla
app.set("view engine", "ejs");
app.set('views',__dirname + '/views');

app.use(express.static(__dirname + "/public"));


app.get('/', (req, res)=>{
    res.render("index", {titulo : "mi titulo dinamico"})
});

app.get('/servicios', (req,res)=>{
    res.render("servicios", {tituloServicios:"Este es un mensaje dinamico de Servicios" })
});

app.use((req, res , next) => {
    res.status(404).render("404",{
        titulo: "404",
        descripcion:"Titulo de este Sitio Web"
    })
});

app.listen(port, ()=>{console.log('servidor conectado en el puerto', port);
})