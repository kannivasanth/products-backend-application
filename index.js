const express = require("express")
require("dotenv").config()
const cors = require("cors")
const dbConnect = require("./src/db/db")
const productRouter = require("./src/routes/productRouter")

const app = express()

app.use(express.json())
app.use(cors())
app.use('/',productRouter)

dbConnect()

// homepage route

app.get('/',(req,res)=>{
    res.send("<h1>Shopping Products Backend Data</h1>")
})

const port = process.env.PORT 

app.listen(port,()=>{
    console.log(`Server Started in PORT : http://localhost:${port}`);
})