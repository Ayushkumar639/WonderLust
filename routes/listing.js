const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const { isLogedIn, isOwner, validationListing } = require("../middleWare.js");
const listingController = require("../controllers/listings.js");
const multer = require('multer');
const { storage } = require("../cloudConfig.js");
const upload = multer({ storage });

// Index Route
router
    .route("/")
    .get(wrapAsync(listingController.index))
    .post(isLogedIn, validationListing, upload.single('listing[image]'), wrapAsync(listingController.createListing));

//New Route
router.get("/new", isLogedIn, listingController.renderNewForm);

// Update, Delete Route
router
    .route("/:id")
    .get(wrapAsync(listingController.showListing))
    .put(isLogedIn, isOwner, upload.single('listing[image]'), validationListing, wrapAsync(listingController.updateListing))
    .delete(isLogedIn, wrapAsync(listingController.destroyListing));

//Edit Route
router.get("/:id/edit", isLogedIn, isOwner, wrapAsync(listingController.renderEditForm));

module.exports = router;