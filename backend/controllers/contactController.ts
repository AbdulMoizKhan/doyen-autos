import { Request, Response } from 'express';
const nodemailer = require("nodemailer");
export const submitContactForm = async (req: Request, res: Response) => {
    try {
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'doyenautos@gmail.com',
                pass: 'wsaz iehu axul ocau'
            }
        });
        const recipients = [req.body.email, 'doyenautos@gmail.com'];
        let info = await transporter.sendMail({
            from: 'Doyen Autos <doyenautos@gmail.com>',
            to: recipients,
            subject: `Message From Doyen Autos`,
            html: `
                <html>
                    <head>
                        <style>
                            body {
                                font-family: Arial, sans-serif;
                            }
                            .container {
                                max-width: 600px;
                                margin: 0 auto;
                                padding: 20px;
                                border: 1px solid #ccc;
                                border-radius: 5px;
                                background-color: #f9f9f9;
                            }
                            .header {
                                background-color: #007bff;
                                color: #fff;
                                padding: 10px;
                                text-align: center;
                                border-radius: 5px 5px 0 0;
                            }
                            .content {
                                padding: 20px;
                            }
                        </style>
                    </head>
                    <body>
                        <div class="container">
                            <div class="header">
                                <h1>Message from Doyen Autos</h1>
                            </div>
                            <div class="content">
                                <p>Hello ${req.body.firstname} ${req.body.lastName},</p>
                                <p>Thank you for contacting us regarding our services.</p>
                                <p>We have received your message:</p>
                                <p>${req.body.message}</p>
                                <p>We will get back to you as soon as possible.</p>
                                <p>Best regards,<br/>Doyen Autos Team</p>
                            </div>
                        </div>
                    </body>
                </html>
            `
        });
        res.status(200).send('Email Successfully sent');
        res.end();
    } catch (error) {
        console.log(error);
        res.status(500).send('Server error');
    }
};
