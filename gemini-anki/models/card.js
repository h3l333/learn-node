//Create card table
import { sequelize } from "../database.js";
import { DataTypes } from "sequelize";

const Card = sequelize.define("Card", {
  front: DataTypes.STRING,
  back: DataTypes.STRING,
});

export default Card;
