const path = require ("path")
const mongoose = require("mongoose")
const express = require ("express")
const bodyParser = require("body-parser")
const app = express()

mongoose.connect("mongodb://localhost/Things2", { useNewUrlParser: true, useUnifiedTopology: true })

app.use(express.static(path.join(__dirname,"dist")))
app.use(express.static(path.join(__dirname,"node_modules")))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

const Schema = mongoose.Schema

const thingsSchema = new Schema ({
    name: String
})

const Things = mongoose.model("Things",thingsSchema)

app.get("/things", async function(req,res){
    const get = await Things.find({})
    res.send(get) 
})

app.post("/things",async function(req,res){
    console.log(req.body)
    const add = new Things(req.body)
    await add.save()
    res.send(add)
})

const port = 3001
app.listen(port,function(){
    console.log(`port up and running on port :${port} `)
})

