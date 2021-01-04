const router = require("express").Router();
const booksController = require("../../controllers/booksController");

router.route("/new")
    .post(booksController.create);

router.route("/saved")
    .get(booksController.findAll);

// router
//   .route("/:id")
//   .get(booksController.findById)
//   .put(booksController.update)
//   .delete(booksController.remove);

module.exports = router;