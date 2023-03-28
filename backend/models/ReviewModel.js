const mongoose = require("mongoose");

const reviewSchema = mongoose.Schema(
  {
    comment: { type: String, require: true },
    rating: { type: Number, require: true },
    user: {
      _id: { type: mongoose.Schema.Types.ObjectId, require: true },
      name: { type: String, require: true },
    },
  },
  {
    timestamps: true,
  }
);

const Review = mongoose.model("Review", reviewSchema);
module.exports = Review;
