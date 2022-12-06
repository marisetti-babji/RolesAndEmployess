const express = require('express')
const cors =require('cors')
const db = require('./src/models/index')

const app =express()

const corOption =({
      origin :'https://localhost:3000'
})

//midel wares
app.use(cors(corOption))
app.use(express.json()) 
app.use(express.urlencoded({extended:false}))

//call to routers
const router = require('./src/views/routerViews')

//test server
app.get('/',(req,res)=>{
    res.status(200).send('Welcome to Associations With Sequelize')
})


app.listen(3000,()=>{
    console.log("server is connected 3000")
})

app.use('/employee',router)
