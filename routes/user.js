const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const passport = require("passport");
const { saveRedirectUrl } = require("../middleWare.js");

const userController = require("../controllers/users.js")

// SignUp Route
router
    .route("/signup")
    .get(userController.renderSignUpForm)
    .post(wrapAsync(userController.SignUp));

// LogIn Route
router
    .route("/login")
    .get(userController.renderLogInForm)
    .post(saveRedirectUrl, passport.authenticate("local", { failureRedirect: "/login", failureFlash: true }), wrapAsync(userController.LogIn));

// LogOut Route
router.get("/logout", userController.LogOut);

module.exports = router;