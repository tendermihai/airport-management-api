import fs from "fs";
import path from "path";

export function getAirport() {
  return new Promise((resolve, reject) => {
    fs.readFile("data.json", "utf-8", (err, data) => {
      if (err) {
        reject(err);
      } else {
        const airports = JSON.parse(data);
        resolve(airports);
      }
    });
  });
}
