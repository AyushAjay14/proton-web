const express = require("express");
const path = require("path");
const mongoose = require('mongoose');
const app = express();

// app.use(express.bodyParser());
app.use(express.json());
const staticpath = path.join(__dirname , "../public");
app.use(express.static(staticpath));
app.get("/" , (req , resp) => {
    resp.send("Hello...");
});

const connnetMongo = async () => mongoose.connect('mongodb+srv://ayushajay:ayushajay@cluster0.whbaums.mongodb.net/?retryWrites=true&w=majority')
const emailSchema = new mongoose.Schema({
  email: {
    type:String,
    required:true, 
    unique:true,
  },
  name : {
    type:String,
  },
  last : {
    type:String,
  }
});
const emailModel = mongoose.models.Email || mongoose.model("Email" , emailSchema);
app.post("/send" , async (req,res)=>{
    await connnetMongo();
    const email = await emailModel.create(req.body);
    console.log(req.body);
    res.status(200).send('done');
})

app.listen(process.env.PORT || 8000 , () => {
    console.log(`listening on http://localhost:8000`);
});