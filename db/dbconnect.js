let mongoose = require("mongoose")


let dbconnect = () => {
    mongoose.connect(process.env.DB_URL).then(() => {
        console.log("database connect success");
    }).catch((error) => {
        console.log("database connection error", error);
    });
}


module.exports = dbconnect;