import mongoose from 'mongoose'

const productSchema = new mongoose.Schema({
    title: {
      type: String,
      required: true,
      trim: true,
    },
    images: {
      type: Array,
      required: true
    },
    slug: {
      type: String,
      // required: true,
      trim: true,
      unique: true,
    },
    content: {
      type: String,
      // required: true,
      trim: true,
    },
    meta: {
      type: String,
      // required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true
    },
    loaike: {
      type: String,
      required: true
   },
   chieucao: {
    type: String,
    required: true
    },
    chieudai: {
      type: String,
      required: true
    },
    dorongmam: {
      type: String,
      required: true
    },
    sotang: {
      type: String,
      required: true
    },
    mausac: {
      type: String,
      required: true
    },
    category: {
        type: String,
        required: true
    },
  },
  {
    timestamps: true,
  }
);

let Dataset = mongoose.models.product || mongoose.model('product', productSchema)
export default Dataset