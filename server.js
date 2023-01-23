// BackEnd

const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
app.use(cors());

app.use(express.json());

app.use("/", router);

app.listen(6969, () => {
    console.log("Server is being listened to");
});

const myEmail = nodemailer.createTransport({
    service: hotmail,
    auth: {
        user: 
    }
});
