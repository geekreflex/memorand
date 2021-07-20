const express = require("express");

const { registerUser, authUser } = require("../controllers/userController");
const { validateRegister } = require("../validation/userValidation");

const router = express.Router();

router.post("/register", validateRegister, registerUser);
router.post("/login", authUser);

module.exports = router;
