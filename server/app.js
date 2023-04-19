const express = require('express');
const app = express();
const dbConnection = require('./database/db');
require('./model/schema');
const cors = require('cors');
const userRouter = require('./router/userRouter');
const taskRouter = require('./router/taskRouter');
const blog_middleware = require('./middleware/blog_middleware');

// database
dbConnection();

// middleware
// app.use(blog_middleware);
app.use(cors());
app.use(express.json())

// Route
app.use("/api/v1/user" , userRouter);
app.use("/api/v1/task" , taskRouter);

let PORT = process.env.port || 8000;
app.listen(PORT, () => { console.log(`server started successfuly in post ${PORT}`); })