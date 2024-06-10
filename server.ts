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
    res.send(req.body.user)
    res.send(req.body.banana)
})

app.post('/login', (req, res) => {
    const reqEmail = req.body.email
    const reqPassword = req.body.password

    console.log(reqEmail, reqPassword)
    debugger;

    if (users.find((user) => user.email === reqEmail && user.password === reqPassword
    )) {
        res.send('login successful')
    }
    else {
        res.send('login unsuccessful')
    }


})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
