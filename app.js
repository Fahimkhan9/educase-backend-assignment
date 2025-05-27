import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
const app = express();

app.use(cors(
    {
        origin: process.env.CORS_ORIGIN || 'http://localhost:3000',
        credentials: true,
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
    }
));
app.use(express.json(
    { limit: '16kb', }
));
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(cookieParser());

// import routes

import schoolRoutes from './routes/school.routes.js';


app.use('/api/v1/school',schoolRoutes)





export { app }