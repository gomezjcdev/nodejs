const mongoose = require("mongoose");

const dbConnect = () => {
    const DB_URI = process.env.DB_URI;
    mongoose.connect(DB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }, (err, response) => {
        if (!err) {
            console.log("*****SUCCESS CONNECT******");
        } else {
            console.log("*****ERROR******");
            console.log(err);
        }
    })
}

module.exports = dbConnect;