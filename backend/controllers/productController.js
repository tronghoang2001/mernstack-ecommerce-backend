const Product = require("../models/ProductModel");
const recordsPerPage = require("../config/pagination");
const { query } = require("express");

const getProducts = async (req, res, next) => {
  try {
    //filter
    let query = {};
    let queryCondition = false;
    let priceQueryCondition = {};
    if (req.query.price) {
      queryCondition = true;
      priceQueryCondition = { price: { $lte: Number(req.query.price) } };
    }
    let ratingQueryCondition = {};
    if (req.query.rating) {
      queryCondition = true;
      ratingQueryCondition = { price: { $in: req.query.rating.split(",") } };
    }

    if (queryCondition) {
      query = {
        $and: [priceQueryCondition, ratingQueryCondition],
      };
    }

    //pagination
    const pageNum = Number(req.query.pageNum) || 1;

    //sort by name, price,...
    let sort = {};
    const sortOption = req.query.sort || "";
    if (sortOption) {
      let sortOpt = sortOption.split("_");
      sort = { [sortOpt[0]]: Number(sortOpt[1]) };
    }

    const totalProducts = await Product.countDocuments(query);
    const products = await Product.find(query)
      .skip(recordsPerPage * (pageNum - 1))
      .sort(sort)
      .limit(recordsPerPage);
    res.json({
      products,
      pageNum,
      paginationLinkNumber: Math.ceil(totalProducts / recordsPerPage),
    });
  } catch (error) {
    next(error);
  }
};
module.exports = getProducts;
