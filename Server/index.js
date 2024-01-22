const express = require("express");
const mongoose = require("mongoose");
const multer = require("multer");
const cors = require("cors");
const app = express();
const Connections = require('./Model/Connections');
const Users = require('./Model/User')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({credentials:true, origin:'http://localhost:3000'}));
app.use(express.static('Server'));
app.use('/Images', express.static(__dirname +'/Images'))

mongoose.connect("mongodb://127.0.0.1:27017/ConnectionsDB").then(console.log("Connected successfully."));

const Storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./Images")
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + "-" + file.originalname)
    }
});

const upload = multer({ storage: Storage });

app.get("/connections", async (req, res) => { 
    res.json(await Connections.find())
        
});
app.get("/connections/:id", async(req, res)=>{
    const {id} = req.params
    const contact =await Connections.findOne({_id:id})
    res.json(contact)
    
})

app.post("/connections", upload.single("file"), async (req, res) => {
    
    const contactData = await Connections.create({
        Image:req.file.filename,
        Name:req.body.Name,
        Phone:req.body.Phone,
        Email:req.body.Email,
        Address:req.body.Address
    })
    res.json(contactData)
});

app.delete("/connections/:id", async (req, res) => {
    const {id} = req.params
    console.log(id)
    await Connections.deleteOne({_id:id})
    res.json('ok')
});

app.listen(5000, () => {
    console.log("running on port 5000.")
});