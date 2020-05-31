const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const colors = require('colors');
const cors = require('cors');
const connectDB = require('./config/db');
// import bootcamps routes
const bootcamps = require('./routes/bootcamps');

const app = express();
const PORT = process.env.PORT || 5000;

dotenv.config({
    path: './config/config.env'
});

app.use(cors());
// body-parser
app.use(express.json());

// Connect to database
connectDB();
// Dev logging middleware
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}
// Consuming bootcamps routes
app.use('/api/v1/bootcamps', bootcamps);

const server = app.listen(PORT, () =>
    console.log(`Server is running on ${PORT} in ${process.env.NODE_ENV} mode`)
);

process.on('unhandledRejection', (err, promise) => {
    console.error(`Error: ${err.message}`);
    // Close server and exit process
    server.close(() => process.exit(1));
});