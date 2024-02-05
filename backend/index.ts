import express, { Request, Response } from 'express';
const axios = require('axios');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('doyen-autos-project1.vercel.app/api/data', async (req, res) => {
    try {
      const apiKey = "CFB3CE6C-C29D-4F74-A051-12CDD6E4B2AB";
      const VRM = "KM14AKK";
      const DataPackage = "VehicleData";
      const QueryStringOptionals = "&api_nullitems=1";
      const ApiVersion = 2;

      const url = `https://uk1.ukvehicledata.co.uk/api/datapackage/${DataPackage}?v=${ApiVersion}${QueryStringOptionals}&key_vrm=${VRM}&auth_apikey=${apiKey}`;

      const response = await axios.get(url);

      res.json(response.data);
    } catch (error) {
      console.error("Error:", error);
      res.status(500).json({ error: "Internal Server Error" }); 
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
