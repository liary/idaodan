var redis = require("redis"),
    client = redis.createClient(6379, "10.3.30.186");
 
client.on("error", function(err){
    console.log("Error: " + err);
});
 
client.on("connect", function(){
    // start server();
    client.set("name_key", "hello world", function(err, reply){
        console.log(reply.toString());
    });
 
    client.get("name_key", function(err, reply){
        console.log(reply.toString());
    });
});