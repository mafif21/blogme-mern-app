const express = require("express");
const router = express.Router();
const blogController = require("./controller/BlogController");

// blogs route
router.route("/blogs").get(blogController.index).post(blogController.store);
router
  .route("/blogs/:id")
  .get(blogController.validateIdParam, blogController.show)
  .patch(blogController.validateIdParam, blogController.update)
  .delete(blogController.validateIdParam, blogController.destroy);

module.exports = router;
