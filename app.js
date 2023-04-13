const express = require('express');
const app = express();
const dbConnection = require('./database/db');
require('./model/schema');
const cors = require('cors');
const userRouter = require('./router/userRouter');

// database
dbConnection();

// middleware
app.use(cors());
app.use(express.json())

// Route
app.use("/api/v1/user" , userRouter);

let PORT = process.env.port || 8000;
app.listen(PORT, () => { console.log(`server started successfuly in post ${PORT}`); })