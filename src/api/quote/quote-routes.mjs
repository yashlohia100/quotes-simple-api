import { Router } from 'express';
import { createQuote, getAllQuotes } from './quote-controller.mjs';

const quoteRouter = Router();

quoteRouter.route('/').get(getAllQuotes).post(createQuote);

export default quoteRouter;
