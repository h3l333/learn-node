import express from 'express';
import apiRoutes from './routes.js';
import db from './database.js';
const { sequelize, connectToDb } = db;
import bodyParser from 'body-parser';

const app = express();
const PORT = 3000;

app.use(express.json());
//each incoming request creates a new 'req' object
//in this application, request bodies are expected to be JSON
//express.json() parses them and stores the result in req.body
app.use('/api', apiRoutes);
//matches requests with the /api route to the route handlers specified in the apiRoutes module

app.use((request, response) => {
    response.status(404);
    response.json({message: 'Resource not found, zamn'});
})

app.use((request, response) => {
    response.status(500);
    response.json({message: 'Something went wrong'});
})

//registers middleware, functions that run before the final route handler responds
//.use() attaches function that need be run for matching requests

app.get('/', (request, response) => {
    response.status(200).json({message: 'Hello!'});
})
//handle GET requests to the path '/' by sending the code 200 and a greeting

app.listen(PORT, async () => { //async keyword allows await to be used inside the body and block
    console.log(`Server running at http://localhost:${PORT}`); //
    await connectToDb(); //waits for a database connection before continuing, blocks only the callback
})
//listen for incoming HTTP requests at the specified port, connect to the database