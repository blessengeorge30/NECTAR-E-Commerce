const express=require("express");
const app= express();

const mongoose =require ("mongoose");

const mongoUrl="mongodb+srv://blessengeorge30:Zion2012@cluster0.dfcivke.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

mongoose.connect(mongoUrl).then(() =>{
    console.log("Database Connected")
}).catch( (e) => {
    console.log(e);
}); 



app.get("/", (req, res) => {
    res.send({status:"Started"})
});

app.post

 app.listen(5001,() => {
    console.log("node.js server started.")
})

