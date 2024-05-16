import { Schema, model } from 'mongoose';

const quoteSchema = new Schema({
  text: {
    type: String,
    required: true,
    unique: true,
  },
  author: {
    type: String,
    default: 'Anonymous',
  },
});

const Quote = model('Quote', quoteSchema);
export default Quote;
