const express = require("express");
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000

app.use(cors())

app.use(express.json())

const user =[
    {id: 1, name: "Shabana", email: "shabana@gmail.com"},
    {id: 2, name: "Sabila", email: "sabila@gmail.com"},
    {id: 3, name: "Shabnor", email: "shabnor@gmail.com"},
]

app.get('/', (req, res) =>{
    res.send("User Management Server is running on port")
})

app.post('/users', (req, res) =>{
    console.log("post api hitting");
    console.log(req.body)
    const newUser = req.body;
    newUser.id = user.length + 1;
    user.push(newUser)
    res.send(newUser)
})

app.get('/users', (req, res) =>{
    res.send(user)
})

app.listen(port, ()=>{
    console.log(`Server is running on port: ${port}`)
})