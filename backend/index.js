require('dotenv').config()
const express = require('express');
const cors = require('cors')
const connect = require('./connect/connect')
const userModel = require('./model/user.model')
const productModel = require('./model/product.model')
const app = express()

app.use(cors())
app.use(express.json({limit: "10mb"}))

const port = process.env.PORT || 4000


// connect mongodb
connect(process.env.MONGO_URL)

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
        const data = await userModel(req.body)
        await data.save()
        res.send({message: 'siccessfully sign up!!!', alert: true})
    }
})

// api login
app.post('/login', async (req, res) => {
    const {email} = req.body

    const user = await userModel.findOne({email: email})
    if(user) {
        res.send({message: 'login successfully!!!', alert: true, data: user})
    }  else {
        res.send({message: 'username or password incorrect!!!', alert: false})
    }
})

// api product
app.post('/new_product', async (req, res) => {
    const product = await productModel.findOne({name_product: req.body.name_product})
    if(product) {
        res.json({message: "product exists", success: false})
    } else {
        const data = new productModel(req.body)
        await data.save()
        res.json({message: 'product added!!!', success: true, data})
    }
})

// api list product
app.get('/list_product', async (req, res) => {
    const list_product = await productModel.find({})
    res.send(list_product)
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})