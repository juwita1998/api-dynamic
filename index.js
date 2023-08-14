const express = require("express")
const mongoose = require("mongoose")
const URI = "mongodb+srv://lontebangsat062:agus12345@cluster0.aalujvg.mongodb.net/training-mongoDb"
const port = 5000
const cors = require("cors")
const app = express()

app.use(cors())

mongoose.connect(URI,{})
.then(result => console.log("database is connected"))
.catch(err => console.log(err))

const family = new mongoose.Schema({
     name:String,
     age:Number
     
})

const mongoTraining = mongoose.model("mongo",family)
const mongoTraining1 = mongoose.model("mongo1",family)

app.get("/family-1", async (req,res)=>{
       try {
         const keluarga =  await mongoTraining.find()
       

      //    console.log(calculate)
         res.json(keluarga)
        
       } catch (error) {
          console.log(error.message)
       }
})

app.get("/family-2", async (req,res)=>{
      try {
        const keluarga1 =  await mongoTraining1.find()
      

     //    console.log(calculate)
        res.json(keluarga1)
       
      } catch (error) {
         console.log(error.message)
      }
})



app.get("/",(req,res)=>{
      res.send("home page")
})

app.listen(port, ()=>{
      console.log(`the server is running on: ${port}`)
})