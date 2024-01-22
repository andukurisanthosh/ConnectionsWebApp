const mongoose = require("mongoose");

const connectionsSchma = new mongoose.Schema(
    {
        Image: {
            type: String
        },
        Name: {
            type: String,
            require: true
        },
        Phone: {
            type: String,
            require: true
        },
        Email: {
            type: String,
            require: true
        },
        Address: {
            type: String,
            require: true
        }
    }
);

const Connections = new mongoose.model("Connections", connectionsSchma);

module.exports= Connections;