//jshint esversion:6 

const express = require("express");
const bodyPerser = require("body-parser");

const app = express();
app.use(bodyPerser.urlencoded({extended: true}));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html")
});

app.get("/bmiCalculator", function(req, res){
    res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/", function(req, res){
    let num1 = Number(req.body.n1);
    let num2 = Number(req.body.n2);

    let result = num1 + num2;

    res.send("The result is " + result);
});

app.post("/bmiCalculator", function(req, res){
    let wei = Number(req.body.w1);
    let hei = Number(req.body.h1);

    let wresult = wei + hei;

    res.send("Your BMI is " + wresult);
});

app.listen(3000, function(){
    console.log('We are in now 3000');
});