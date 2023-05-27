import mongoose from "mongoose";

const reviewSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    rating: { type: Number, required: true },
    comment: { type: String, required: false },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

const productSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
    },
    description: {
      type: String,
      required: true,
    },
    reviews: [reviewSchema],
    rating: {
      type: Number,
      required: true,
      default: 0,
    },
    numReviews: {
      type: Number,
      required: true,
      default: 0,
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      required: false,
      ref: "Category",
    },
    price: {
      type: Number,
      required: true,
      default: 0,
    },
    isShow:{
      type:Boolean,
      required:false,
      default:true
    }
  },
  {
    timestamps: true,
  }
);

productSchema.index({ name: "text" });
const Product = mongoose.model("Product", productSchema);
export default Product;
