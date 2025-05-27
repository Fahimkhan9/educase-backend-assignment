
import {Sequelize} from 'sequelize'
import {  DB_HOST, DB_NAME, DB_PASSWORD, DB_PORT, DB_USERNAME } from '../constants.js';

console.log(DB_HOST, DB_NAME, DB_PASSWORD, DB_PORT, DB_USERNAME);

const mysql2 = await import('mysql2');

export const sequelize = new Sequelize({
  host:DB_HOST,
  username:DB_USERNAME,
  password:DB_PASSWORD,
  database: DB_NAME,
  port:DB_PORT,
  dialect: 'mysql',
  dialectModule:mysql2,
  benchmark: true,
}) 
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