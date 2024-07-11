const express = require("express");
require("dotenv").config();
const app = express();
const URL = process.env.URL;
const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`App listen in ${PORT}`));
