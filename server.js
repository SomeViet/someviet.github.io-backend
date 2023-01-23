// BackEnd

require("dotenv").config();
const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");

const { USER, PASSWORD, SERVICE } = process.env;

const app = express();
app.use(cors());

app.use(express.json());

app.use("/", router);

app.listen(6969, () => {
    console.log("Server is being listened to");
});

const myEmail = nodemailer.createTransport({
    service: SERVICE,
    auth: {
        user: USER,
        pass: PASSWORD,
    },
});

router.post("/contact", (req, res) => {
    const { firstName, lastName, email, message } = req.body;
    const fullName = firstName + " " + lastName;

    const mail = {
        from: USER,
        to: USER,
        subject: `Portfolio Site - Contact Request - ${fullName}`,
        html: `<h3>Email sent from portfolio site </h3>
            <p>Name: ${fullName}</p>
           <p>Email: ${email}</p>
           <p>Message: ${message}</p>`,
    };

    myEmail.sendMail(mail, (error) => {
        if (error) {
            res.json(error);
        } else {
            res.json({ code: 200, status: "Moo Moo" });
        }
    });
});
