const express = require("express");
const expressLayouts = require("express-ejs-layouts");

const app = express();
const port = process.env.PORT || 3000;

require("dotenv").config();

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(expressLayouts);

// Set Layouts Folder and view engine
app.set("layout", "./layouts/main");
app.set("view engine", "ejs");
const routes = require("./server/routes/restaurantRoutes");
app.use("/", routes);

app.listen(3000, () => console.log(`Listening to port ${port}`));
