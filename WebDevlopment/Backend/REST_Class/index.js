const express = require('express');
const app = express();
const port=8000;
// const mongoose= require('mongoose');
// mongoose.connect('mongodb://127.0.0.1:27017/Quara')
//  .then(res =>{ console.log("database connected")})
//  .catch(err=>{ console.log(err)})

//  const schema = new mongoose.Schema({
//     Username:String,
//     content:String
//  })
//  const User = mongoose.model("User", schema)
const path = require('path'); 
// // convert get,post method to Patch and Delete method
const  methodOverride = require('method-override');
app.use(methodOverride("_method"))
 


//create unique ID
const { v4: uuidv4 } = require('uuid');// ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"/views"))
app.use(express.static(path.join(__dirname,"/public/css")));

// post method ke data ko req.body me covert krta hai as json formet
app.use(express.urlencoded({extended :true}))
app.use(express.json());

let posts=[ 
    {
        id:uuidv4(),
        username:"vinay",
        content:" hello"
    }
      
 ];
 //read
app.get('/posts',  async (req,res)=>{
    res.render("home.ejs", {posts})
})
//create
app.get('/posts/new',(req,res)=>{
    res.render("newform.ejs") 
})

app.post('/post', (req,res)=>{
   let {username,content } = req.body;
    const id = uuidv4();
    posts.push({ id, username,content})
    res.redirect("/posts")
})
//seen by each post individual
app.get('/posts/:id',(req,res)=>{
    let {id} = req.params;
    const post = posts.find((p) => p.id === id);
    console.log(post);
    res.render("show.ejs", {post});
    // res.send("hello world")
}) 
// update 
app.get('/posts/:id/edit',(req,res)=>{
     let {id}=req.params;
     const post = posts.find((p)=> p.id === id)
     res.render("edit.ejs", {post});
})
app.patch('/post/:id',(req,res)=>{
    let {id}=req.params;
    // console.log(req.body);
    // let newContent = req.body.content;
    let {content} = req.body;
    const post = posts.find((p)=> p.id === id)
    post.content = content;
    // console.log(post);
    res.redirect("/posts");
})

//delete - destroy 
app.delete('/post/:id',(req,res)=>{
    let {id}= req.params;
    console.log(id)
    posts=posts.filter((p)=> p.id!==id)
    console.log(posts);
    res.redirect("/posts");
    // res.send("delete response is recieve");
})
app.listen(port,()=>{
    console.log("server is started at 8000")
})