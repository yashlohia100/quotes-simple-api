import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import quoteRouter from './api/quote/quote-routes.mjs';

const app = express();

app.use(morgan('dev'));

// app.use(cors({ origin: 'http://localhost:5173' }));
app.use(cors({ origin: 'https://quotes-my-app.netlify.app' }));

if (process.env.NODE_ENV === 'development') {
  console.log('In development mode');
} else {
  console.log('In production mode');
}

app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).json({
    status: 'success',
  });
});

const quotes = [
  {
    id: '001',
    text: 'Do not worry',
  },
  {
    id: '002',
    text: 'Think win win',
  },
];

app.get('/api/quotes', (req, res) => {
  res.status(200).json({
    status: 'success',
    quotes,
  });
});

app.get('/api/quotes/:id', (req, res) => {
  const quote = quotes.find((quote) => quote.id === req.params.id);

  res.status(200).json({
    status: 'success',
    quote,
  });
});

app.use('/api/v1/quotes', quoteRouter);

export default app;
