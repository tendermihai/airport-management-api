import { getAirport } from "./repository.js";
import express, { json, request, response } from "express";
import cors from "cors";

const app = express();

app.use(express.json());

app.use(cors());

app.get("/api/v1/airports/all", async (request, response) => {
  let airports = await getAirport();
  response.status(200).json(airports);
});

app.listen(6000, () => {
  console.log("express is listening on 6000");
});
