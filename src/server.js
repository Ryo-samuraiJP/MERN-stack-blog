import express from 'express'; 

const app = express();
app.use(express.json());

app.post('/hello', (req, res) => {
  res.send(`Hello ${req.body.name}`);
});

app.listen(8000, () => {
  console.log('SErver is listening on port 8000');
});

