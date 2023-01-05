const express = require("express");
const { registerUser, authUser } = require("../controllers/userControllers");

const router = express.Router();

// way 1
router.route("/").post(registerUser);
// way 2
router.post("/login", authUser);

module.exports = router;
