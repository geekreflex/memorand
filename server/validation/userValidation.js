const { check, validationResult } = require("express-validator");

exports.validateRegister = [
  check("firstName")
    .trim()
    .toLowerCase()
    .escape()
    .not()
    .isEmpty()
    .withMessage("First name field is required")
    .isLength({ min: 3 })
    .withMessage("First name minimum of 3 characters")
    .bail(),
  check("lastName")
    .trim()
    .toLowerCase()
    .escape()
    .not()
    .isEmpty()
    .withMessage("Last name field is required")
    .isLength({ min: 3 })
    .withMessage("Last name minimum of 3 characters")
    .bail(),
  check("email")
    .trim()
    .toLowerCase()
    .isEmail()
    .withMessage("Email is invalid")
    .bail()
    .normalizeEmail()
    .bail()
    .not()
    .isEmpty()
    .withMessage("Email field required")
    .bail(),
  check("password")
    .trim()
    .toLowerCase()
    .not()
    .isEmpty()
    .withMessage("Password field required")
    .bail()
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters")
    .bail(),
  (req, res, next) => {
    const errors = validationResult(req);
    let errArr = [];

    errors.array().map((error) => errArr.push(error.msg));
    if (!errors.isEmpty()) return res.status(422).json({ message: errArr });
    next();
  },
];
