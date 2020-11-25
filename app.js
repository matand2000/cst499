const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", function(req,res){
  res.render("home");
});

app.get("/home", function(req,res){
  res.render("home");
});

app.get("/editor", function(req,res){
  res.render("editor");
});

//server listener
app.listen("3000","0.0.0.0", function(){
  console.log("Express Server is Running...");
});