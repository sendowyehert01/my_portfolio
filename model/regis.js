const mongoose = require("mongoose");

const regisSchema = new mongoose.Schema({
    name: String,
    age: Number,
    location: String
})

const Rehistro = mongoose.model("Rehistro", regisSchema);

module.exports = Rehistro;