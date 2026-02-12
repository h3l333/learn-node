import express from "express";
const router = express.Router();

import Card from "../models/card.js";

router.get("/cards", async (request, response) => {
  const cards = await Card.findAll();
  response.status(200).json(cards);
});

router.post("/cards", async (request, response) => {
  const { front, back } = request.body;

  const newCard = Card.build({
    front: front,
    back: back,
  });

  try {
    await newCard.save();
    response.status(201).json(newCard);
  } catch (e) {
    response.json(e);
  }
});

export default router;
