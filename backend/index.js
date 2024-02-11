"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const axios = require('axios');
const nodemailer = require("nodemailer");
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.get('/api/data', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { VRMs } = req.query;
    console.log(VRMs);
    const apiKey = process.env.APIKEY;
    const VRM = VRMs;
    const DataPackage = "VehicleData";
    const QueryStringOptionals = "&api_nullitems=1";
    const ApiVersion = 2;
    const url = `https://uk1.ukvehicledata.co.uk/api/datapackage/${DataPackage}?v=${ApiVersion}${QueryStringOptionals}&key_vrm=${VRM}&auth_apikey=${apiKey}`;
    const response = yield axios.get(url);
    console.log(response.status);
    if (response.status === 200) {
        if (VRMs === response.data.Request.DataKeys.Vrm && response.data.Response.StatusCode != "KeyInvalid") {
            res.status(200).json({
                VRMs: response.data.Request.DataKeys.Vrm,
                Make: response.data.Response.DataItems.ClassificationDetails.Dvla.Make,
                Model: response.data.Response.DataItems.ClassificationDetails.Dvla.Model,
                FuelType: response.data.Response.DataItems.VehicleRegistration.FuelType,
                TransmissionType: response.data.Response.DataItems.VehicleRegistration.TransmissionType,
                EngineSize: response.data.Response.DataItems.SmmtDetails.EngineCapacity,
                Doors: response.data.Response.DataItems.SmmtDetails.NumberOfDoors,
                message: "Your car Details are successfully found"
            });
        }
        else {
            res.status(404).json({ message: "Your car details are not found" });
        }
    }
    console.log("helow");
}));
app.post('/api/submitcontactus', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'doyenautos@gmail.com',
                pass: 'wsaz iehu axul ocau'
            }
        });
        let info = yield transporter.sendMail({
            from: 'Doyen Autos <doyenautos@gmail.com>',
            to: [req.body.email, 'doyenautos@gmail.com'],
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
        </html>`
        });
        res.status(200).send('Email Successfully sent');
        res.end();
    }
    catch (error) {
        console.log(error);
        res.status(500).send('Email sent fail');
    }
}));
app.post('/api/quote', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let quoteTransporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'doyenautos@gmail.com',
                pass: 'wsaz iehu axul ocau'
            }
        });
        let info = yield quoteTransporter.sendMail({
            from: 'Doyen Autos <doyenautos@gmail.com>',
            to: [req.body.email, 'doyenautos@gmail.com'],
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
        res.status(200).send("Quote has been mailed and WhatsApp message sent successfully");
    }
    catch (error) {
        console.error(error);
        res.status(500).send('Failed to send quote and WhatsApp message');
    }
}));
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
