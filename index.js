const express = require('express')
const app = express()
const port = 5000
const cors = require('cors');


const recipes = require('./data/recipes.json')
app.use(cors());

app.get('/', (req, res) => {
  res.send('The wok n roll is running')
})


app.get('/recipes', (req, res) => {
  res.send(recipes)
})

app.get('/recipes/:id', (req, res) => {
  const id = req.params.id;
  const selactedRecipes = recipes.find(r => r.id == id)
  res.send(selactedRecipes)
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})