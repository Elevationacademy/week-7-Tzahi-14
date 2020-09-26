const path = require ("path")
const express = require ("express")
const bodyParser = require ("body-parser")
const mongoose = require ("mongoose")
const app = express ()

mongoose.connect("mongodb://localhost/testtttt", { useNewUrlParser: true, useUnifiedTopology: true })


app.use(express.static(path.join(__dirname,"dist")))
app.use(express.static(path.join(__dirname,"node_modules")))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

const Schema = mongoose.Schema

const testSchema = new Schema({
    name: String
})

const Test = mongoose.model("Test",testSchema)

app.get("/fs", async function(req,res){
    const getData = await Test.find({}) 
    res.send(getData)
})

app.post("/fs", async function(req,res){
    const post = new Test(req.body)
    await post.save()
    res.send(post)
})

const port = 3010

app.listen(port, function(){
    console.log(`${port} up and running`)
})