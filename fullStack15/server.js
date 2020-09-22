const path = require ("path")
const bodyParser = require("body-parser")
const express = require ("express")
const mongoose = require ("mongoose")
const app = express()

mongoose.connect("mongodb://localhost/fullStack15", { useNewUrlParser: true, useUnifiedTopology: true })

app.use(express.static(path.join(__dirname,"dist")))
app.use(express.static(path.join(__dirname,"node_modules")))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

const Schema = mongoose.Schema
const thingsSchema = new Schema({
    name: String
})

const Things = mongoose.model("Things",thingsSchema)

app.get("/things", async function(req,res){
   const get = await Things.find({})
   res.send (get)
})

app.post("/word",async function(req,res){
    console.log(req.body)
    const newWord = new Things(req.body)
    await newWord.save()
    res.send(newWord)
})

const port = 3000
app.listen(port,function(){
    console.log(`${port} up and running`)
})