import express from 'express';
import cors from 'cors';

const app = express();

const port = 3000;

app.use(
  cors({
    origin: 'http://localhost:5173',
  }),
);

app.get('/search', async (req, res) => {
  const url = new URL('https://oda.com/api/v1/search/mixed/');

  const { q = '', page = '1' } = req.query;

  url.searchParams.set('q', q as string);
  url.searchParams.set('page', page as string);
  url.searchParams.set('type', 'product');

  const resFetch = await fetch(url);

  const data = await resFetch.json();

  return res.status(200).json(data);
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port', port);
});
