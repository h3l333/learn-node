import { Sequelize } from "sequelize"; //import sequelize class
import "dotenv/config";

const SQL_USER = process.env.SQL_USER;
const SQL_PASS = process.env.SQL_PASS;

export const sequelize = new Sequelize( //create new sequelize instance
  "gemini_anki_project", //database
  SQL_USER, //user
  SQL_PASS, //pass
  {
    dialect: "mysql",
    host: "localhost",
  }, //options
);

export const connectDatabase = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connected!!! Yipeee!");
  } catch (error) {
    console.log("Connection failed");
  }
};

connectDatabase();
