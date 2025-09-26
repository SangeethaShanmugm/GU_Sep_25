// import express from 'express'
const express = require('express');
const PORT = 8000;
const app = express()

// req => what we send to server
// res => what server respond back

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

//remove a todos
app.delete('/todos/:id', (req, res) => {
    const { id } = req.params //string
    console.log(req.params)
    console.log(id, req.params)
    res.json(todos)
})


app.listen(PORT, () => console.log("Server started on the PORT http://localhost:", PORT));