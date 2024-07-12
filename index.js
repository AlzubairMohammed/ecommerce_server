const express = require("express");
const httpStatus = require("./utils/httpStatus");
const error = require("./utils/errorResponse");
const swaggerUI = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");
const cors = require("cors");
require("dotenv").config();
const app = express();
const URL = process.env.URL;
const PORT = process.env.PORT || 5000;
app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);
const products = require("./routes/products");
app.use(`${URL}/products`, products);

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Library API",
      version: "1.0.0",
      description: "A simple Express Library API",
    },
    servers: [
      {
        url: URL,
      },
    ],
  },
  apis: ["./routes/*.js"],
};
const specs = swaggerJsDoc(options);
app.use("/", swaggerUI.serve, swaggerUI.setup(specs));

app.use((error, req, res, next) => {
  res.status(error.statusCode || 500).json({
    status: error.statusText || httpStatus.ERROR,
    message: error.message,
    code: error.statusCode || 500,
    data: null,
  });
});

app.listen(PORT, () => console.log(`App listen in ${PORT}`));
