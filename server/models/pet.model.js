const mongoose = require("mongoose")

const petSchema = new mongoose.Schema ({
    name: {
        type: String,
        required: [true, "Name is required"],
        minLength: [3, "Name needs to be 3 characters long"]
    },
    petType: {
        type: String,
        required: [true, "Pet type is required"]
    },
    description: {
        type: String,
        required: [true, "Description is requiredd"]
    },
    skill1: {
        type: String
    },
    skill2: {
        type: String
    },
    skill3: {
        type: String
    },
    likes: {
        type: Number,
        default:0
    }
}, {timestamps: true})

// EXPORT MODEL
const Pet = mongoose.model("Pet", petSchema)

module.exports = Pet;