import { connectDatabase, sequelize } from "./database.js";
import "./models/card.js";
import cardRoutes from "./routes/cards.js";
import express from "express";
import bodyParser from "body-parser";

const app = express();
const PORT = 2000;

app.use(express.json()); // parse incoming requests
app.use("/anki", cardRoutes);

await sequelize.sync();

app.get("/", (request, response) => {
  response.status(200).json({ message: "Hello!" });
});

app.listen(PORT, async () => {
  console.log(`Server running at http://localhost:${PORT}`);
  await connectDatabase();
});
