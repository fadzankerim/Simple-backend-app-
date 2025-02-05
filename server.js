// http://localhost:8383
const express = require('express');
const app = express();
const PORT = 8383;

let data = {
    users: ["James"]
};

// Tip-1-Website endpoints
app.get('/', (req,res) =>{
    console.log('this is an endpoint', req.method)
    res.send(`
        <body style="background:pink;
        color:blue;
        text-align: center;">
            <h1>Data:</h1>
            <p>${JSON.stringify(data)}</p>
            <a href="/dashboard">Dashboard</a>
        </body>
        `)
})

app.use(express.json())

app.get('/dashboard', (req, res) =>{
    console.log('This is the second endpoint', req.method)
    res.send(`
        <body style="background:pink;
        color:blue;
        text-align: center;">
            <h1>Hi you have reached the dashboard</h1>
            <a href="/">Home</a>
        </body>
        `)
})

// Tip-2-API endpoints

//CRUD-METHOD create(POST) read(GET) update(PUT) delete(DELETE)

app.get('/api/data', (req,res) => {
    console.log('This one is for data')
    res.status(203).send(data)
})

app.post('/api/data', (req,res) => {
    // creating user
    const newEntry = req.body
    console.log(newEntry)
    data = {
        ...data,
        users: [...data.users, newEntry.name]
    }
    res.sendStatus(201)
})

app.delete('/api/data', (req,res)=>{
    data.users.pop();
    console.log("Last one to join has been deleted")
    res.sendStatus(202)
})

app.listen(PORT, () => console.log(`Server has started on port: ${PORT}`));
