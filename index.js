const _ = require("lodash");
const http = require("http");
const express = require("express");
const app = express();

// const forceSsl = require('force-ssl-heroku');
// app.use(forceSsl);
// app.use("/bootstrap", express.static(path.join(__dirname, "/node_modules/bootstrap/dist")));
app.use(express.static("static"));

app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "/static/index.html"));
});


(async () => {
    try {
        const port = process.env.PORT || 3000;
        let server = http.createServer(app);
        server.listen(port);
        console.log("Server is running at port " + port);
        //let ngrok = await (await fetch("http://localhost:4040/api/tunnels")).json();
        //const ngrok_url = _.find(ngrok.tunnels, {"proto": "https"}).public_url;
        //console.log("ngrok tunner: " + ngrok_url);  
    }
    catch(e) {
        console.log(e);        
    }
})();
