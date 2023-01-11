const express = require("express");
const dotenv = require("dotenv");
const notes = require("../Data/Data");
const userRouter = require("../routes/UserRouter");
const connectiondb = require("../congif/db");
var cors = require("cors");
const { userAdd } = require("../controllers/userController");

const PORT = process.env.PORT || 5000;

const app = express();
app.use(express.json());
app.use(cors({ origin: "http://localhost:3000", credentials: true }));

connectiondb();

dotenv.config();

app.get("/", (req, res) => {
  res.send("Api running...");
});

app.get("/api/notes", (req, res) => {
  res.json(notes);
});
app.post("/api", (req, res) => {
  res.json(notes);
});

app.use("/user", userRouter);

app.use((req, res, next) => {
  const err = new Error("Not Found");
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
  res.locals.error = err;
  const status = err.status || 500;
  res.status(status);
  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === "production" ? null : err.stack,
  });
});

app.listen(PORT, console.log(`server Started to port ${PORT} `));
