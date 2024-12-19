const express = require("express");
const PORT = 8000;
const app = express();
const userRouter = require("./routes/user");
const { connectMongoDB } = require("./connection");

const logReqRes = require("./middlewares");

// Connect to MongoDB
connectMongoDB("mongodb://127.0.0.1:27017/first-mongodb-connection").then(() =>
  console.log("Mongodb connected!")
);

// Middleware - Plugin
app.use(express.urlencoded({ extended: true }));

// Middleware - Logger
app.use(logReqRes("log.txt"));

//Routes
// User Router
app.use("/api/users", userRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
