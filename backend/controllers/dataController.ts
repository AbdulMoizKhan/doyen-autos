import { Request, Response } from 'express';
import axios from 'axios';

export const getData = async (req: Request, res: Response) => {
    const { VRMs } = req.query;
    console.log(VRMs);
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
                VRMs: response.data.Request.DataKeys.Vrm,
                Make: response.data.Response.DataItems.ClassificationDetails.Dvla.Make,
                Model: response.data.Response.DataItems.ClassificationDetails.Dvla.Model,
                FuelType: response.data.Response.DataItems.VehicleRegistration.FuelType,
                TransmissionType: response.data.Response.DataItems.VehicleRegistration.TransmissionType,
                EngineSize: response.data.Response.DataItems.SmmtDetails.EngineCapacity,
                Doors: response.data.Response.DataItems.SmmtDetails.NumberOfDoors
            });
        }
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};
