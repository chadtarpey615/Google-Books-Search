const router = require("express").Router();
const bookRoutes = require("./googlebooks");

// Book routes
router.use("/books", bookRoutes);

module.exports = router;
