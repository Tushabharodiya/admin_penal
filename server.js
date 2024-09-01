require("dotenv").config()
let http = require("http");
let express = require("express");
const dbconnect = require("./db/dbconnect");
const routes = require("./routes");
let app = express();
app.use(express.json());

// routes
app.use("/v1",routes);

// database connection
dbconnect()

// http server
http.createServer(app).listen(process.env.PORT, () => {
    console.log(`server stated ${process.env.PORT}`);
})