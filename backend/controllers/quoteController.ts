import { Request, Response } from 'express';
const nodemailer = require("nodemailer");

export const sendQuote = async (req: Request, res: Response) => {
    try {
        let quoteTransporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'doyenautos@gmail.com',
                pass: 'wsaz iehu axul ocau'
            }
        });

        let info = await quoteTransporter.sendMail({
            from: 'Doyen Autos <doyenautos@gmail.com>',
            to: req.body.email,
            subject: 'Service Quote Confirmation',
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
                            ul {
                                list-style-type: none;
                                padding: 0;
                            }
                            ul li {
                                margin-bottom: 10px;
                            }
                        </style>
                    </head>
                    <body>
                        <div class="container">
                            <div class="header">
                                <h1>Service Quote Confirmation</h1>
                            </div>
                            <div class="content">
                                <p>Dear ${req.body.firstname} ${req.body.lastName},</p>
                                <p>Thank you for your service quote request. We are pleased to confirm the following details:</p>
                                <ul>
                                    <li><strong>Registration No:</strong> ${req.body.registrationNo}</li>
                                    <li><strong>Make:</strong> ${req.body.make}</li>
                                    <li><strong>Model:</strong> ${req.body.model}</li>
                                    <li><strong>Engine Size:</strong> ${req.body.engineSize}</li>
                                    <li><strong>Post Code:</strong> ${req.body.postCode}</li>
                                    <li><strong>Services:</strong> ${req.body.services.join(', ')}</li>
                                    <li><strong>Phone No:</strong> ${req.body.phoneNo}</li>
                                    <li><strong>Address:</strong> ${req.body.address}</li>
                                    <li><strong>Date:</strong> ${new Date(req.body.date).toLocaleString()}</li>
                                    <li><strong>Message:</strong> ${req.body.message}</li>
                                </ul>
                                <p>We will proceed with the requested services and get back to you with further details.</p>
                                <p>Best regards,<br/>The Doyen Autos Team</p>
                            </div>
                        </div>
                    </body>
                </html>
            `
        });

        res.status(200).send("Quote has been mailed successfully");
        res.end()
    } catch (error) {
        console.log(error);
        res.status(500).send('Server error');
    }
};
