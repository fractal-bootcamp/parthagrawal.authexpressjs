import express, { Request } from "express";
import cookieParser from 'cookie-parser';
import { isAuthed } from "./auth";
import prisma from "./prisma/prismaclient";

const users = prisma.user.findMany()

const app = express()
// what does this do? 
// app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser());


// app.use(bodyParser.json())

const port = 3000

// const users = [
//     {
//         id: '1',
//         email: 'parth@gmail.com',
//         password: 'password'
//     },
//     {
//         id: '2',
//         email: "jason@jasonmomoa.com",
//         password: 'baseball'
//     }
// ]


app.get('/', (req, res) => {
    res.send('Hello world');
});




app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/static/login.html')
})

async function findUser(reqEmail: string, reqPassword: string) {
    const foundUser = await prisma.user.findUnique({
        where: {
            email: reqEmail,
            password: reqPassword
        }
    })
    console.log(foundUser)
    return foundUser
}
app.post('/login', async (req, res) => {

    console.log(req.body)
    console.log(req.body)
    const reqEmail = req.body.email
    const reqPassword = req.body.password

    console.log(reqEmail, reqPassword)

    const foundUser = await findUser(reqEmail, reqPassword)

    console.log(foundUser)


    if (foundUser != null) {
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

app.post('/signup', (req, res) => {

})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
