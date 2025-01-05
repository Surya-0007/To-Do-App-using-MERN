const mongoose = require("mongoose");


// We have created a basic schema of how the data will be stored
const todoSchema = mongoose.Schema({
    text: {
        type: String,
        required: true,
    },
    completed: {
        type: Boolean,
        required: true,
    },
},
{
    timestamps: true
}
);

module.exports = mongoose.model("todos", todoSchema);