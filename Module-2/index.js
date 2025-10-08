// import express from 'express'
const express = require('express');
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
app.post("/todos", (req, res) => {
    // const newTodo = req.body;
    const newTodo = {
        id: (todos.length + 1).toString(),
        title: req.body.title,
        description: req.body.description,
        dueDate: req.body.dueDate,
        priority: req.body.priority,
        completed: false
    }
    console.log(req.body)
    todos.push(newTodo);
    res.status(201).json(todos);

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