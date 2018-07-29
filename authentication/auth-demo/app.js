const express = require('express');

let app = express();
app.set('view engine', 'ejs');

const PORT = 3000;
// ROUTES //
app.get('/', (req, res) => {
  res.render('home');
});

app.listen(PORT, () => {
  console.log(`Server up and runninng on Port ${PORT}`)
});