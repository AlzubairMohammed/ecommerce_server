const express = require("express");
const httpStatus = require("./utils/httpStatus");
const error = require("./utils/errorResponse");
const cors = require("cors");
require("dotenv").config();
const app = express();
const URL = process.env.URL;
const PORT = process.env.PORT;
app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);
app.use((error, req, res, next) => {
  res.status(error.statusCode || 500).json({
    status: error.statusText || httpStatus.ERROR,
    message: error.message,
    code: error.statusCode || 500,
    data: null,
  });
});

app.listen(PORT, () => console.log(`App listen in ${PORT}`));
