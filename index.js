const express = require("express");
const app = express();
const path = require("path");
const mongoose = require('mongoose');
const Rehistro = require("./model/regis.js");
const ejsMate = require('ejs-mate');
const methodOverride = require("method-override");

mongoose.connect('mongodb://127.0.0.1:27017/newStudents')
.then (() => {
    console.log("CONNECTED!")
}) . catch ((err) => {
    console.log("ERROR");
    console.log(err);
});

app.use(methodOverride("_method"));
app.engine('ejs', ejsMate);
app.set("views", path.join(__dirname, "/views"));
app.use(express.static(path.join(__dirname, "/public")));
app.set("view engine", "ejs");

app.use(express.urlencoded({extended:true}));

app.get("/", async (req, res) => {
    res.render("homepage");
});

app.get("/calculator", async (req, res) => {
    res.render("calculator");
});

app.get("/resume", async (req, res) => {
    res.render("resume");
});

app.get("/names", async (req, res) => {
    const pangalan = await Rehistro.find({});
    res.render("home", {pangalan:pangalan});
});

app.post("/names", async (req,res) => {
    const newRegister = new Rehistro(req.body);
    await newRegister.save();
    res.redirect("/names");
});

app.get("/names/:id", async (req,res) => {
    const {id} = req.params;
    const pangalan1 = await Rehistro.findById(id);
    res.render("record", {pangalan1})
});

app.get("/names/:id/edit", async (req,res) => {
    const {id} = req.params;
    const pangalan1 = await Rehistro.findById(id);
    res.render("edit", {pangalan1})
});

app.put("/names/:id", async (req, res)=>{
    const {id} = req.params;
    const pangalan1 = await Rehistro.findByIdAndUpdate(id, req.body, {runValidators:true, new: true});
    res.redirect(`/names/${pangalan1._id}`);
});

app.delete("/names/:id", async (req, res) => {
    const {id} = req.params;
    const deletedMember = await Rehistro.findByIdAndDelete(id);
    res.redirect(`/names`);
});

app.listen(3000, () => {
    console.log("SERVER IS RUNNING!");
});