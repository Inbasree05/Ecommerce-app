const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please provide product name'],
      trim: true,
      maxlength: [100, 'Product name cannot exceed 100 characters'],
    },
    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      index: true,
    },
    description: {
      type: String,
      required: [true, 'Please provide product description'],
      maxlength: [2000, 'Description cannot exceed 2000 characters'],
    },
    price: {
      type: Number,
      required: [true, 'Please provide product price'],
      min: [0, 'Price cannot be negative'],
      default: 0.0,
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Category',
      required: [true, 'Please select a category for this product'],
    },
    quantity: {
      type: Number,
      required: [true, 'Please provide stock quantity'],
      min: [0, 'Quantity cannot be negative'],
      default: 0,
    },
    images: {
      type: [String],
      required: [true, 'Please provide at least one image url'],
    },
    ratings: {
      type: Number,
      default: 0,
      min: [0, 'Ratings cannot be less than 0'],
      max: [5, 'Ratings cannot be more than 5'],
    },
    numOfReviews: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Product', productSchema);
