const express=require("express");
const app= express();

const mongoose =require ("mongoose");
app.use(express.json());

const mongoUrl="mongodb+srv://blessengeorge30:Zion2012@cluster0.dfcivke.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

mongoose.connect(mongoUrl).then(() =>{
    console.log("Database Connected")
}).catch( (e) => {
    console.log(e);
}); 

require("./UserDetails")
const User=mongoose.model ("UserInfo");

app.get("/", (req, res) => {
    res.send({status:"Started"})
});

app.post('/register',async(req,res)=>{
    const {name,email,password} = req.body;
   
    const oldUser = await User.findOne({ email: email });

    if (oldUser) {
      return res.send({ data: "User already exists!!" });
    }
   
    try {
        await User.create({
          name: name,
          email: email,
          mobile,
          password: encryptedPassword,
          userType,
        });
        res.send({ status: "ok", data: "User Created" });
      } catch (error) {
        res.send({ status: "error", data: error });
      }
});

 app.listen(5001,() => {
    console.log("node.js server started.")
})

