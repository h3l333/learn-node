import { GoogleGenAI } from "@google/genai";

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });

let userInput = "機械";

async function main() {
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: `Return nothing but 3 example sentences for the Japanese word ${userInput}`,
  });
  console.log(response.text);
}

main();
