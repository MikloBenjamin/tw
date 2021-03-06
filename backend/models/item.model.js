const mongoose = require("mongoose");
const Schema = mongoose.Schema;

mongoose.set("debug", true);

// This is the table
const itemSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: false,
        trim: true,
        minlength: 5
    },
    description: {
        type: String,
        required: false,
        trim: true
    },
    owner: {
        type: String,
        required: true
    },
    image: {
        data: Buffer,
        contentType: String,
        size: Number,
        name: String,
        imageBase64: String
    },
    bidenddate: {
        type: Date,
        required: true
    },
    startingprice: {
        type: Number,
        required: true
    },
    bidprice: {
        type: Number,
        required: false
    },
    bidder: {
        type: String,
        required: false
    },
    followingUsers: {
        type: Array
    }
}, {
    timestamps: true
})

const Item = mongoose.model("Item", itemSchema);

module.exports = Item;