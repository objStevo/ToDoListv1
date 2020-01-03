//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set("view engine", "ejs");

app.get("/", function(req,res){

  var today = new Date();
  var day = "";
  if(today.getDay()===6 || today.getDay()===0){
    day = "weekend";
  }else{
    day = "weekday";
  }
  res.render('list',{kindOfDay: day});
  // res.send();
});

app.listen(3000,function(){
  console.log("Server started on port 3000 ...");
});

/*
Notes:
- When return a response that has been rendered, simply use res.render not res.send





*/
