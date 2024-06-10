import bodyParser from "body-parser";
import express from "express";
// QUESTION - diff between above statement?
// import { Express } from "express";

const app = express()
// what does this do? 
// app.use(bodyParser.urlencoded({ extended: true }))

app.use(bodyParser.json())

const port = 5001

const users = [
    {
        id: '1',
        email: 'parth@gmail.com',
        password: 'password'
    },
    {
        id: '2',
        email: "jason@jasonmomoa.com",
        password: 'baseball'
    }
]

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.post('/banana', (req, res) => {
    console.log(req.body.user)
    console.log(req.body.banana)
})

app.get('/login', (req, res) => {
    res.send('<input type="text" />')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
