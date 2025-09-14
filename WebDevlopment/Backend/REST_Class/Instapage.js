
//create unique ID
const { v4: uuidv4 } = require('uuid');// ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'

let cards=[
  {
    id:uuidv4(),   
    user: "vinay152",
    followers: 25000,
    following:200,
     "posts": [
      {
        "image": "https://plus.unsplash.com/premium_photo-1677545182067-26ac518ef64f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2F0c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
        "likes": 200,
        "comments": 17
      },
      {
        "image": "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2F0c3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
        "likes": 312,
        "comments": 19
      }
    ] 
  },
  {
    id:uuidv4(),
    user: "sachin109",
    followers: 75000,
    following:200  ,
    posts: [
      {
        "image": "https://images.unsplash.com/photo-1598133894008-61f7fdb8cc3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZG9nc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
        "likes": 3000,
        "comments": 41
      },
      {
        "image": "https://images.unsplash.com/photo-1552053831-71594a27632d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGRvZ3N8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
        "likes": 2500,
        "comments": 32
      }
     
    ]
}
]
const express = require('express');
const app=express();
const port =8000;
const path = require('path');

app.set("view engine",'ejs');
app.set('views',path.join(__dirname,'/views'))
app.use(express.static(path.join(__dirname,'/public/css')))

//parse
app.use(express.urlencoded({extended:true}));
app.use(express.json());

//crete id 
const  methodOverride = require('method-override');
app.use(methodOverride("_method"))

app.get('/cards',(req,res)=>{
    res.render("InstaH.ejs" ,{cards})
})
app.get('/cards/form',(req,res)=>{
    res.render("InstaForm.ejs");
})
app.post('/cards',(req,res)=>{
    // let {user, followers, following,posts}=req.body;
    console.log(req.body)
    let id = uuidv4();
    cards.push(req.body);
    res.redirect('/cards')
})
app.get('/cards/:id/edit',(req,res)=>{
    let {id} =req.params;
    console.log(id);
    let card = cards.find((u) => u.id === id);
    console.log(card);
    res.render("InstaEdit.ejs" ,{card} )
})
app.patch('/cards/:id',(req,res)=>{
     let {id} =req.params;
     let {user,userfollow,userfollwing}= req.body;
     let card=cards.find((c)=> c.id===id);
     card.user=user;
     card.followers=userfollow;
     card.following=userfollwing;
     res.redirect('/cards')
})
app.delete('/cards/:id',(req,res)=>{
    let {id}=req.params;
     cards = cards.filter((c)=> c.id!==id)
     console.log(cards)
     res.redirect('/cards')   
})

app.listen(port ,()=>{
    console.log(`server is start on port in main server ${port}`)
}) 
