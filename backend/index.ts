import express, { Request, Response } from 'express';
import cors from 'cors';
const axios = require('axios');
const nodemailer = require("nodemailer");
const app = express();


const PORT = process.env.PORT || 3000;
app.use(express.json());
app.use(cors({
  origin: 'http://localhost:3001'
}));


app.get('/api/data', async (req, res) => {
    try {
      const apiKey = "CFB3CE6C-C29D-4F74-A051-12CDD6E4B2AB";
      const VRM = "KM14AKK";
      const DataPackage = "VehicleData";
      const QueryStringOptionals = "&api_nullitems=1";
      const ApiVersion = 2;

      const url = `https://uk1.ukvehicledata.co.uk/api/datapackage/${DataPackage}?v=${ApiVersion}${QueryStringOptionals}&key_vrm=${VRM}&auth_apikey=${apiKey}`;
      const response = await axios.get(url);
      if (response) {
        res.json({
          VRN : response.data.Request.DataKeys.Vrm,
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
      from: 'doyenautos@gmail.com', 
      to: req.body.email, 
      subject: `Message From ${req.body.firstname}`, 
      text: `${req.body.message}` , 
      html: `<b>${req.body.firstname}</b><br/><br/>${req.body.message}`  
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
      from: 'abdulmoizkhan140@gmail.com',
      to: req.body.email,
      subject: 'Service Quote Request', 
      text: `Dear ${req.body.firstname} ${req.body.lastName},\n\nThank you for your service quote request. Here are the details:\n\nRegistration No: ${req.body.registrationNo}\nMake: ${req.body.make}\nModel: ${req.body.model}\nEngine Size: ${req.body.engineSize}\nPost Code: ${req.body.postCode}\nServices: ${req.body.services.join(', ')}\nPhone No: ${req.body.phoneNo}\nAddress: ${req.body.address}\nDate: ${new Date(req.body.date).toLocaleString()}\nMessage: ${req.body.message}\n\nWe will get back to you as soon as possible.\n\nBest regards,\nThe Doyen Autos Team`,
      html: `<p>Dear ${req.body.firstname} ${req.body.lastName},</p><p>Thank you for your service quote request. Here are the details:</p><ul><li>Registration No: ${req.body.registrationNo}</li><li>Make: ${req.body.make}</li><li>Model: ${req.body.model}</li><li>Engine Size: ${req.body.engineSize}</li><li>Post Code: ${req.body.postCode}</li><li>Services: ${req.body.services.join(', ')}</li><li>Phone No: ${req.body.phoneNo}</li><li>Address: ${req.body.address}</li><li>Date: ${new Date(req.body.date).toLocaleString()}</li><li>Message: ${req.body.message}</li></ul><p>We will get back to you as soon as possible.</p><p>Best regards,<br/>The Doyen Autos Team</p>`
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
