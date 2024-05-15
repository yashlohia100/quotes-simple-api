import express from 'express';
import morgan from 'morgan';

const app = express();

if (process.env.NODE_ENV === 'development') {
  console.log('In development mode');
  app.use(morgan('dev'));
} else {
  console.log('In production mode');
}

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

export default app;
