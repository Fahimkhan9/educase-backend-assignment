
import {app} from './app.js';
import { PORT } from './constants.js';
import connectDB from './db/index.js';
const port = PORT || 4000;





connectDB()
  .then(() => {
    app.listen(port, () => {   
        console.log(`Server is running on port ${port}`);
    });
  })
  .catch((error) => {
    console.error('Database connection error:', error);
  });

