const User = require("../models/user.js");
const passport = require("passport");

module.exports.renderSignUpForm = (req, res) => {
    res.render("./users/signup.ejs");
}

module.exports.SignUp = async (req, res) => {
    try {
        let { username, email, password } = req.body;
        let newUser = new User({ email, username });

        let registeredUser = await User.register(newUser, password);
        console.log(registeredUser);
        req.login(registeredUser, (err) => {
            if (err) {
                return next(err);
            }
            req.flash("success", "LogOut Successfull!");
            res.redirect("/listings");
        });
    } catch (error) {
        req.flash("error", error.message);
        res.redirect("/signup");
    }
}

module.exports.renderLogInForm = (req, res) => {
    res.render("./users/login.ejs");
}

module.exports.LogIn = async (req, res) => {
    req.flash("success", "Welcome Back To WanderLust!");
    if (res.locals.redirectURL) {
        return res.redirect(res.locals.redirectURL);
    } else {
        res.redirect("/listings");
    }
}

module.exports.LogOut = (req, res, next) => {
    req.logOut((err) => {
        if (err) {
            return next(err);
        }
        req.flash("success", "LogOut Successfull!");
        res.redirect("/listings");
    });
}