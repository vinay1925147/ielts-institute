const express = require('express');
const app=express();
const port =8000;
const mongoose =require('mongoose');

async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/nosql_DB')
}
main().then(res=>{
    console.log("connection successful")
}).catch(err=>{
    console.log(err)
})

const {router}=require('./Router/rout')
app.use('/api',router)

app.listen(port,()=>{
    console.log(`server is running at port ${port}`);
})

