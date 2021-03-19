const express=require('express');
const path=require('path');
const getData=require('./src/datab');
const app=express();
var KiteConnect = require("kiteconnect").KiteConnect;
var api_secret="p2zkzvivv3y8fveacsb9ciqnu5y71iul"
const fs=require('fs');

const port=8001;


const staticPath=path.join(__dirname,"public");
const another=path.join(__dirname,"src/stock.json");
const user=path.join(__dirname,'src/user.json');

//for normal page
//middlewares


app.set("view engine","hbs");
app.use(express.static(staticPath));
app.use('/stock.json',express.static(another));
app.use('/user.json',express.static(user));
app.use(express.urlencoded({extended:false}));



app.get("/",(req,res)=>{
    res.render('login');
})

app.post("/",(req,res)=>{

    const request_token=req.body.req_token;
    res.redirect('localhost:8001/');

    var kc = new KiteConnect({
        api_key: "6zfi2amoxjco04yo",
        
    })

    kc.generateSession(request_token,api_secret)
        .then((response)=> {
    
            fs.writeFileSync('./src/cred.json',JSON.stringify(response));
            console.log(response);
            kc.setAccessToken(response.access_token);

      
            
        })
        .catch(function(err) {
            console.log(err);
            
        });
})

const date=new Date();

getData();

 app.use('/index',(req,res)=>{
   
     if((date.getDay()!=0 && date.getDay()!=6) &&(date.getHours()>=9 && date.getMinutes()>=14) &&(date.getHours()<=15 && date.getMinutes()<=16) ){
        
        res.render('index');
        
     }
     else {
        
        
        res.render('holiday');
        
         
     }

 })


app.listen(port,()=>{
    console.log(`listening at ${port}`)

})

