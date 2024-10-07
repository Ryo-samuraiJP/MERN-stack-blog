import express from 'express'; 

let articelsInfo = [
  {
    name: 'learn-react', 
    upvotes: 0, 
  }, 
  {
    name: 'learn-node', 
    upvotes: 0,
  }, 
  {
    name: 'mongodb', 
    upvotes: 0,
  }
]

const app = express();
app.use(express.json());

app.put('/api/articles/:name/upvote', (req, res) => {
  const { name } = req.params; 
  const article = articelsInfo.find(a => a.name === name); 
  
  if (article) {
    article.upvotes += 1;
    res.send(`The ${name} articlce now has ${article.upvotes} upvotes`);
  } else {
    res.send('The article doesn\'t exist');
  }

});

app.listen(8000, () => {
  console.log('Server is listening on port 8000');
});
