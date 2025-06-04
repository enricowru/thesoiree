const mongoose = require("mongoose");

const connect = mongoose.connect("mongodb+srv://enricowru:1234@cluster0.yahkvow.mongodb.net/createUser?retryWrites=true&w=majority&appName=Cluster0");

module.exports = { connect };
