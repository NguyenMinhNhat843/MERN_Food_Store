require('dotenv').config()
const express = require('express');
const cors = require('cors')
const mongoose = require('mongoose')

const app = express()
app.use(cors())
app.use(express.json({limit: "10mb"}))

const port = process.env.PORT || 4000


// connect mongodb
mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log('mmongodb is connected!!!'))
    .catch((err) => console.log(err))

// Schema 
const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
    },
    lastName: {
        type: String
    },
    email: {
        type: String,
        unique: true
    },
    password: {
        type: String
    },
    confirmPassword: {
        type: String
    },
    image: {
        type: String
    }
})
const userModel = mongoose.model('user', userSchema)

// api
app.get('/', (req, res) => {
    res.send('server is running')
})

// api register
app.post('/signup', async (req, res) => {
    const {email} = req.body

    const existsUser = await userModel.findOne({ email: email })
    if(existsUser) {
        res.send({message: 'email is already register!!!', alert: false})
    } else {
        const data = userModel(req.body)
        const save = data.save()
        res.send({message: 'siccessfully sign up!!!', alert: true})
    }
})

// api login
app.post('/login', async (req, res) => {
    console.log(req.body)
    const {email} = req.body

    const user = await userModel.findOne({email: email})
    if(user) {
        res.send({message: 'login successfully!!!', alert: true, data: user})
    }  else {
        res.send({message: 'username or password incorrect!!!', alert: false})
    }
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})