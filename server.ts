import express from "express";
import cors from 'cors';

const app = express()
// what does this do? 
// app.use(bodyParser.urlencoded({ extended: true }))
// app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())
// app.use(bodyParser.json())

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
    res.send('Hello world');
});




app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/static/login.html')
})

app.post('/login', (req, res) => {

    console.log(req)
    console.log(req.body)
    console.log(req.body)
    const reqEmail = req.body.email
    const reqPassword = req.body.password

    console.log(reqEmail, reqPassword)

    if (users.find((user) => user.email === reqEmail && user.password === reqPassword
    )) {
        res.redirect('/dashboard')
    }
    else {
        res.status(400).json({ error: 'login unsuccessful' })
    }

    // 2. remember logged in


})

app.get('/dashboard', (req, res) => {
    res.send('<h2>login successful: welcome to your dashboard</h2>')

})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
