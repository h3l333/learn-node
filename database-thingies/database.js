//Sequelize documentation: https://sequelize.org/api/v6/class/src/sequelize.js~sequelize
import { Sequelize } from 'sequelize'; //import sequelize class

const sequelize = new Sequelize( //create new sequelize instance
    'task-app', //database
    'appuser', //user
    'apppass', //pass 
    {
        dialect:'mysql',
        host:'localhost'
    } //options
)  

export const connectToDb = async () => { //using async to enable use of "await" inside the body
    try {
        await sequelize.authenticate();
        console.log('Successfully connected to the database! :3');
    }
    catch(error) {
        console.log(error);
    } //try {} catch(error) {} serve to run crash-prone code in a contained manner. If an error occurs
    //execution jumps to catch 
}

export default { sequelize, connectToDb }; //export the sequelize instance for
//use by other files