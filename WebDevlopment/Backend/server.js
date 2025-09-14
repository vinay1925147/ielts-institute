const express = require("express");
const app = express();
const port=8000;
const cors = require('cors')
const friends =[
    {
        id:1,
        name:"vinay asati",
        age:20
    },
     {
        id:2,
        name:"sachin patel",
        age:21
    },
    {
        id:3,
        name:"prince bhalse",
        age:22
    },
    {
        id:4,
        name:"mithlesh",
        age:24
    }
]
app.get("/api/friends",(req,res)=>{
    res.send(friends)
})
app.use(express.urlencoded({extended:true}))
// app.use(express.json())
app.post('/api/friends',(req,res)=>{
const {name,email}=req.body; 
    console.log(req.body)
    const obj = {
        name:name,
        email:email
    }
    res.json(obj);
})
app.listen(port,()=>{
    console.log(`server start at http://localhost:${port}`)
})