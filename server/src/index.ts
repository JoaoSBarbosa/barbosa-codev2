// import express from 'express';
// import nodemailer from 'nodemailer';
// import cors from 'cors';
// import bodyParser from 'body-parser';
//
// const app = express();
// app.use(cors({
//     origin: '*',
//     methods: ['GET', 'POST'],
//     allowedHeaders: ['Content-Type'],
// }));
//
// app.use(bodyParser.json());
//
// app.post('/send-email', (req, res) => {
//     const { name, email, subject, phone, message } = req.body;
//
//     const transporter = nodemailer.createTransport({
//         service: 'gmail',
//         auth: {
//             user: process.env.EMAIL_USER,
//             pass: process.env.EMAIL_PASS
//         }
//     });
//
//     const mailOptions = {
//         from: email,
//         to: process.env.EMAIL_USER,
//         subject: subject,
//         text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`
//     };
//
//     transporter.sendMail(mailOptions, (error, info) => {
//         if (error) {
//             console.error('Ocorreu um erro ao enviar Jão sending email:', error);
//
//             return res.status(500).send(error.toString());
//         }
//         res.status(200).send('Email sent: ' + info.response);
//     });
// });
//
//
// const PORT = process.env.PORT || 5500;
// app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`);
// });

import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

// Carregar variáveis de ambiente do arquivo .env
dotenv.config();

const app = express();
app.use(cors({
    origin: '*',
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type'],
}));

app.use(bodyParser.json());

app.post('/send-email', (req, res) => {
    const { name, email, subject, phone, message } = req.body;

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });

    const mailOptions = {
        from: email,
        to: process.env.EMAIL_USER,
        subject: subject,
        text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Ocorreu um erro ao enviar email:', error);
            return res.status(500).send(error.toString());
        }
        console.log('Email enviado com sucesso!');
        res.status(200).send('Email sent: ' + info.response);
    });
});

const PORT = process.env.PORT || 5500;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
