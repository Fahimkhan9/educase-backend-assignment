
import {Sequelize} from 'sequelize'
import { DATABASE_URL } from '../constants.js';



export const sequelize = new Sequelize(DATABASE_URL) 
const connectDB = async () => {
  try {
     await sequelize.authenticate();
  console.log('Connection has been established successfully.');
    
  } catch (error) {
    console.error("Database connection error:", error);
    process.exit(1);
  }
}
export default connectDB