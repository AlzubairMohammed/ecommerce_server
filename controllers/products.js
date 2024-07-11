const asyncWrapper = require("../middlewares/asyncWrapper.js");
const { models } = require("../database/connection");
const httpStatus = require("../utils/httpStatus.js");
const errorResponse = require("../utils/errorResponse");
const products = require("../models/products.js");
const { validationResult } = require("express-validator");
const { products } = models;

exports.getProducts = asyncWrapper(async (req, res) => {
  let data = await products.findAll();
  return res.json({ status: httpStatus.SUCCESS, data });
});

exports.getProduct = asyncWrapper(async (req, res) => {
  let data = await products.findOne({
    where: { id: req.params.id },
  });
  return res.json({ status: httpStatus.SUCCESS, data });
});

exports.createProduct = asyncWrapper(async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const error = errorResponse.create(errors.array(), 400, httpStatus.FAIL);
    return next(error);
  }
  let data = await products.create(req.body);
  return res.json({ status: httpStatus.SUCCESS, data });
});

exports.editProduct = asyncWrapper(async (req, res) => {
  let data = await products.update(req.body, {
    where: { id: req.params.id },
  });
  return res.json({ status: httpStatus.SUCCESS, data });
});

exports.deleteProduct = asyncWrapper(async (req, res) => {
  let data = await products.destroy({ where: { id: req.params.id } });
  return res.json({ status: httpStatus.SUCCESS, data });
});
