const { body } = require("express-validator");

exports.productsValidator = () => {
  return [
    body("name")
      .notEmpty()
      .withMessage("Field is required .")
      .isString()
      .withMessage("Field must be string ."),
    body("quantity")
      .notEmpty()
      .withMessage("Field is required .")
      .isInt()
      .withMessage("Field must be integer ."),
    body("price")
      .notEmpty()
      .withMessage("Field is required .")
      .isFloat()
      .withMessage("Field must be float ."),
  ];
};
