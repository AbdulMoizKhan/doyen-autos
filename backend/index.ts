import express, { Request, Response } from 'express';
import cors from 'cors';
const axios = require('axios');
const nodemailer = require("nodemailer");
const app = express();


const PORT = process.env.PORT || 3000;
app.use(express.json());
app.use(cors({
  origin: 'https://doyen-autos-hmq4.vercel.app'
}));

app.get('/api/data', async (req, res) => {
    const { VRMs } = req.query
    console.log(VRMs)
    try {
      const apiKey = "CFB3CE6C-C29D-4F74-A051-12CDD6E4B2AB";
      const VRM = VRMs;
      const DataPackage = "VehicleData";
      const QueryStringOptionals = "&api_nullitems=1";
      const ApiVersion = 2;

      const url = `https://uk1.ukvehicledata.co.uk/api/datapackage/${DataPackage}?v=${ApiVersion}${QueryStringOptionals}&key_vrm=${VRM}&auth_apikey=${apiKey}`;
      const response = await axios.get(url);
      if (response) {
        res.json({
          VRMs : response.data.Request.DataKeys.Vrm,
          Make : response.data.Response.DataItems.ClassificationDetails.Dvla.Make,
          Model: response.data.Response.DataItems.ClassificationDetails.Dvla.Model,
          FuelType: response.data.Response.DataItems.VehicleRegistration.FuelType,
          TransmissionType:  response.data.Response.DataItems.VehicleRegistration.TransmissionType,
          EngineSize: response.data.Response.DataItems.SmmtDetails.EngineCapacity,
          Doors: response.data.Response.DataItems.SmmtDetails.NumberOfDoors
        });
      }
    } catch (error) {
      console.error("Error:", error);
      res.status(500).json({ error: "Internal Server Error" }); 
    }
});

app.post('/api/submitcontactus', async(req, res) => {
  try {
    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'doyenautos@gmail.com',
        pass: 'wsaz iehu axul ocau' 
      }
    });
    
    let info = await transporter.sendMail({
      from: 'Doyen Autos <doyenautos@gmail.com>', 
      to: req.body.email, 
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
});

app.post('/api/quote',async(req,res) => {
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
})
// listen for requests
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
