const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')

dotenv.config()
const PORT = process.env.PORT || 3000
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cors())

app.get('/', (req, res)=>{
    res.send('<h1>Hello World</h1>')
})

app.listen(PORT, ()=>{
    console.log(`Connected on port ${PORT}`)
})