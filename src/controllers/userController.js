const cartModel = require("../models/cartModel")
const aws = require('aws-sdk')


/////////////////////////  Aws s3 -- Connection ////////////////////////////////////////////////

aws.config.update({
    accessKeyId: "AKIAY3L35MCRUJ6WPO6J",  // id
    secretAccessKey: "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",  // secret password
    region: "ap-south-1"
});


// this function uploads file to AWS and gives back the url for the file
let uploadFile = async (file) => {
    return new Promise(function (resolve, reject) {

        let s3 = new aws.S3({ apiVersion: "2006-03-01" });
        var uploadParams = {
            ACL: "public-read",
            Bucket: "classroom-training-bucket", // HERE
            Key: "group8/profileImages/" + file.originalname, // HERE    
            Body: file.buffer,
        };

        s3.upload(uploadParams, function (err, data) {
            if (err) {
                return reject({ "error": err });
            }
            console.log(data)
            console.log("File uploaded successfully.");
            return resolve(data.Location); //HERE 
        });
    });
};



//------------------ CREATING USER
const createUser = async (req, res) => {
    res.send({ message: "hii" })


};

//------------------ USER LOGIN   
const loginUser = async (req, res) => {
    res.send({ message: "hii" })


};

//------------------ GETTING USER BY ID
const getUserById = async (req, res) => {
    res.send({ message: "hii" })


};

//------------------ UDATING USER BY ID
const updateUserById = async (req, res) => {
    res.send({ message: "hii" })


};




module.exports = {
    createUser,
    loginUser,
    getUserById,
    updateUserById
}