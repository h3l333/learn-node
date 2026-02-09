//Define ORM models (Object Relational Mapping) and harbor schema definitions (e.g.: Product, Category, Profile, etc)
import db from './database.js';
const { sequelize }  = db;
//Extracts property named "sequelize" from the object "db"
import { DataTypes } from 'sequelize';

const Task = sequelize.define('Task', {
    content:{
        type:DataTypes.STRING(150),
    },
    description:{
        type:DataTypes.TEXT
    },
    is_complete:{
        type:DataTypes.BOOLEAN,
        defaultValue:false
    }
}) //Task = sequelize model; a database table conceptually speaking

sequelize.sync(); //synchronizes defined models to the db, meaning that it can:
//- It can create tables that do not exist
//- Add missing columns based on model attributes, etc

export default Task;