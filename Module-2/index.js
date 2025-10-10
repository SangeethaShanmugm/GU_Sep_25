// import express from 'express'
const express = require('express');
const { MongoClient } = require('mongodb');
require('dotenv').config() // load .env file
const PORT = process.env.PORT;
const app = express()
console.log(process.env.PORT);

// req => what we send to server
// res => what server respond back
//middleware => interpreter
app.use(express.json()) // to parse json data


//custom middleware: Log each request
app.use((req, res, next) => {
    const now = new Date();
    //backtick `` + interpolation ${} => substitute a variable
    console.log(`[ ${now.toISOString()}] ${req.method} ${req.url}`);
    next(); // go to the next middleware or route handler
})


// Connection URL
const url = process.env.MONGO_URI;
const client = new MongoClient(url);

let todoCollection;

async function connectDB() {
    try {
        await client.connect();
        const db = client.db(process.env.DB_NAME);
        todoCollection = db.collection('todos');
        console.log("✅ Mongodb connected successfully");
    } catch (err) {
        console.error("❌ Mongodb connection error", err)
    }
}

connectDB();

//temporary in-memory
let todos = [
    {
        id: '1',
        title: "learn Node.js",
        description: "Understand express basics",
        dueDate: "2025-09-30",
        priority: "high",
        completed: false
    },
    {
        id: '2',
        title: "Build Rest API",
        description: "Create routes for CRUD",
        dueDate: "2025-10-05",
        priority: "medium",
        completed: false
    },
]

//Rest API endpoints
app.get('/', (req, res) => {
    res.send('Hello Everyone😃')
})

app.get('/about', (req, res) => {
    res.send('This is about page😃')
})

//get all todos
app.get('/todos', (req, res) => {
    res.json(todos)
})

//get particular todos id
app.get('/todos/:todosId', (req, res) => {
    const { todosId } = req.params //string
    console.log(req.params.todosId)
    console.log(todosId, req.params.todosId)
    const todo = todos.find(t => t.id === req.params.todosId)
    if (!todo) return res.status(404).json({ message: "No todo found" })
    res.json(todo)
})

//remove todo id
app.delete('/todos/:id', (req, res) => {
    // const { id } = req.params
    const index = todos.findIndex(t => t.id === req.params.id)
    console.log("ToDo Index", index);
    if (index === -1) {
        return res.status(404).json({ message: "Todo Not found" })
    }
    const deleted = todos.splice(index, 1)
    console.log(deleted)
    res.json(deleted[0])
})

//add a new todo
app.post("/todos", async (req, res) => {
    // const newTodo = req.body;
    try {
        //if db is not connected, display local array
        if (!todoCollection) {
            const newTodo = {
                id: (todos.length + 1).toString(),
                title: req.body.title,
                description: req.body.description,
                dueDate: req.body.dueDate,
                priority: req.body.priority,
                completed: false
            }
            todos.push(newTodo);
            res.status(201).json({ message: "Todo added in memory" });
        }
        //find highest existing id in db
        const lastTodo = await todoCollection.find().sort({ id: -1 }).limit(1).toArray();
        const nextId = lastTodo.length > 0 ? (parseInt(lastTodo[0].id) + 1).toString() : "1"
        //add new todo -> assign increment ID => last record in db
        //check => whats last added todo(highest id)
        //add 1  to that ID
        // use it for new todo id

        //create new todo
        const newTodo = {
            id: nextId,
            title: req.body.title,
            description: req.body.description,
            dueDate: req.body.dueDate,
            priority: req.body.priority,
            completed: false
        }
        await todoCollection.insertOne(newTodo)
        res.status(201).json({ message: "Todo added" });
    }
    catch (err) {
        console.error(err)
        return res.status(500).json({ message: "Server Error" })
    }

})

//put => get particular id +  post
app.put("/todos/:id", (req, res) => {
    const todo = todos.find(t => t.id === req.params.id)
    if (!todo) {
        return res.status(404).json({ message: "No todo found" })
    }
    todo.title = req.body.title !== undefined ? req.body.title : todo.title;
    todo.description = req.body.description !== undefined ? req.body.description : todo.description;
    todo.dueDate = req.body.dueDate !== undefined ? req.body.dueDate : todo.dueDate;
    todo.priority = req.body.priority !== undefined ? req.body.priority : todo.priority;
    todo.completed = req.body.completed !== undefined ? req.body.completed : todo.completed;
    res.json(todo);
})
app.listen(PORT, () => console.log(`${process.env.APP_NAME} started on the PORT http://localhost:${process.env.PORT}`));