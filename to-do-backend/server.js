//Importing Libraries

const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");


dotenv.config();

const {
    getTodos,
    createTodos,
    updateTodos,
    deleteTodos
} = require('./controllers/todoController');


const app = express();
const PORT = process.env.PORT || 8000
const connectionURL = process.env.MONGO_URL

//Middlewares
app.use(express.json());
app.use(cors());

// We will connect our database here
mongoose
    .connect(connectionURL)
    .then(() => {
        app.listen(port, () => console.log(`Running on PORT: ${PORT}`));
    })
    .catch((err) => {
        console.log(err);
    })

//CRUD operations
app.get('/todos', getTodos);

app.post('/todos', createTodos);

app.put('/todos/:id', updateTodos);

app.delete('/todos/:id', deleteTodos);
