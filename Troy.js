const express=require("express");
const path=require('path');
const pug=require('pug');
const app=express();
const port=5000;

app.use('/static',express.static('static'))
app.set('view engine', 'pug')
app.set('views',path.join(__dirname,'views'))
app.get('/demo', (req, res) => {
    res.render('demo', { title: 'Hey Riyan', message: 'Focusing on WEBD' })
  })
  

app.get("/",(req,res)=>{
    res.status(200).send("<h1>This is my first express app with Riyan</h1>");
   
});

app.listen(port,()=>{
    console.log(`This is ${port}`);
});
