const express = require("express");
const router = express.Router();
const restaurantController = require("../controllers/restaurantController");

/**
 * App Routes
 */
router.get("/", restaurantController.homePage);

module.exports = router;
