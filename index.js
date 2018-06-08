var express = require("express");

var app = express();

var portVar = 80;


app.get("/", function(req, res){
   res.render("index.ejs")
});


app.get("/restaurant", function(req, res){
    
//These are placeholder values that will eventually be replaced with DB calls
    var restaurantName = "Rudy's";
    var restaurantAddr = "10050 Great Hills Trl, Austin, TX 78759";

    res.render("displayRestaurant.ejs",{restaurantVar: restaurantName, addressVar: restaurantAddr});
});

app.get("*", function(req, res){
    res.send("Error: Not Found");
});

app.listen(portVar, function(){
    console.log("server is listening on port: "+portVar);
});