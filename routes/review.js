const express = require("express");
const router = express.Router({mergeParams: true});
const wrapAsync = require("../utils/wrapAsync.js");
const { isLogedIn, isAuthor, validationReview } = require("../middleWare.js");
const reviewController = require("../controllers/reviews.js");

//Post Review Route
router.post("/", isLogedIn, validationReview, wrapAsync(reviewController.createReview));

// Delete Review Route
router.delete("/:reviewId", isLogedIn, isAuthor, wrapAsync(reviewController.destroyReview));

module.exports = router;