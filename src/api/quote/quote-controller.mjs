import Quote from './quote-model.mjs';

export const getAllQuotes = async (req, res, next) => {
  const quotes = await Quote.find();

  res.status(200).json({
    status: 'success',
    quotes,
  });
};

export const createQuote = async (req, res, next) => {
  const quote = await Quote.create(req.body);

  res.status(201).json({
    status: 'success',
    quote,
  });
};
