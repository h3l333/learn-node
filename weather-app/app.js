#!/usr/bin/env node
import express from 'express';
import https from 'https';
import path from 'path';
import { fileURLToPath } from "url";
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
dotenv.config();
//dependencies

const app = express(); //creates express app used to handle incoming HTTP requests

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.sendFile(path.join(path.dirname(fileURLToPath(import.meta.url)), "index.html"));
    console.log(path.join(path.dirname(fileURLToPath(import.meta.url)), "index.html"));
})
//handles HTTP GET requests to the "/" path; the callback runs when a matching request is received
//res is the express response object used to send a file back to the client

console.log(process.env.WEATHER_API);

app.post("/", (req, res) => {
    const query = req.body.cityName;
    const myLink = `https://api.weatherapi.com/v1/current.json?key=${process.env.WEATHER_API}&q=${query}`;
    console.log(myLink);
    https.get(myLink, (apiRensponse) => { //callback receives response object
        let body = "";

        apiRensponse.on('data', chunk => {
            body += chunk;
        });

        apiRensponse.on('end', chunk => {
            const weatherData = JSON.parse(body);
            const temp = weatherData.current.temp_c;
            const desc = weatherData.current.condition.text;
            res.write(`<p>${desc}</p>`);
            res.write(`<p>Weather in ${query} is: ${temp} degrees</p>`);
            res.send();
        })
    })
})

app.listen(3000, () => {
    console.log('Server is running');
})