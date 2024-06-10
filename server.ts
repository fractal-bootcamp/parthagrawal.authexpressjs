import express, { Request } from "express";
import cookieParser from 'cookie-parser';

const app = express()
// what does this do? 
// app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser());


// app.use(bodyParser.json())

const port = 3000

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


export function isAuthed(req: Request) {
    if (req.cookies.isLoggedIn === "true") {
        return true;
    }
    return false;
}

app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/static/login.html')
})

app.post('/login', (req, res) => {

    console.log(req.body)
    console.log(req.body)
    const reqEmail = req.body.email
    const reqPassword = req.body.password

    console.log(reqEmail, reqPassword)

    if (users.find((user) => user.email === reqEmail && user.password === reqPassword
    )) {
        res.cookie('isLoggedIn', true)
        res.redirect('/dashboard')
    }
    else {
        res.send('login unsuccessful')
    }

})

app.get('/dashboard', (req, res) => {
    if (!isAuthed(req)) {
        res.redirect('/login')
    }
    res.sendFile(__dirname + '/static/dashboard.html')


})

app.get('/logout', (req, res) => {
    res.clearCookie("isLoggedIn")
    res.redirect('/login')
})

app.get('/signup', (req, res) => {
    res.sendFile(__dirname + '/static/signup.html')

})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
