const express = require("express")
const app = express()
require("../api-practice/db/conn")
const port = process.env.PORT || 8000
const Student = require("../api-practice/schema-and-collection/student")

app.use(express.json())

app.post("/student", (req, res)=>{

    const postData = new Student(req.body)

    postData.save().then((result) => {
        res.status(200).send(postData)
        
    }).catch((err) => {

        res.status(400).send(err)
        
    });

   
})


app.get("/student", (req, res)=>{

    Student.find().then(result=>{

        res.status(200).send(result)
        
    }).catch(err=>{
        res.status(400)
        
    })

   
})

app.get("/student/:id", (req, res)=>{

    const getid = req.params.id;
   
   Student.findById(getid).then(result=>{
        res.send(result)
    }).catch(err=>{
        res.status(400)
        
    })

   
})

app.patch("/student/:id", (req, res)=>{

    const getid = req.params.id;
   
   Student.findByIdAndUpdate(getid, req.body, {new:true}).then(result=>{
        res.send(`this data has been updates ${result}`)
    })

   
})

app.delete("/student/:id", (req, res)=>{

    const getid = req.params.id;
   
   Student.findByIdAndDelete({_id:getid}).then(result=>{
        res.send(`this data has been deleted ${result}`)
    })

   
})

app.listen(port, ()=>{
    console.log(`server started at port number ${port}`)
})