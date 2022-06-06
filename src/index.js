const express = require("express");
const bodyParser = require("body-parser");
const route = require("./route/route")
const app = express();

const mongoose = require("mongoose")
const multer = require("multer")
const { AppConfig } = require('aws-sdk');

app.use(multer().any())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))


mongoose.connect("mongodb+srv://priya:priya1122@cluster0.zscq3.mongodb.net/shopingCartDB",
    { useNewUrlParser: true })
    .then(() => console.log("MongoDb is connected"))
    .catch(err => console.log(err))

app.use('/', route);


app.listen(process.env.PORT || 3000, function () {
    console.log("Express App Running On Port " + (process.env.PORT || 3000))
})
