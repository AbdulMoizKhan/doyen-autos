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
exports.getData = void 0;
const axios_1 = __importDefault(require("axios"));
const getData = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { VRMs } = req.query;
    console.log(VRMs);
    try {
        const apiKey = "CFB3CE6C-C29D-4F74-A051-12CDD6E4B2AB";
        const VRM = VRMs;
        const DataPackage = "VehicleData";
        const QueryStringOptionals = "&api_nullitems=1";
        const ApiVersion = 2;
        const url = `https://uk1.ukvehicledata.co.uk/api/datapackage/${DataPackage}?v=${ApiVersion}${QueryStringOptionals}&key_vrm=${VRM}&auth_apikey=${apiKey}`;
        const response = yield axios_1.default.get(url);
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
    }
    catch (error) {
        console.error("Error:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});
exports.getData = getData;
