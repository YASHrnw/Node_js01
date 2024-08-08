const express = require('express');
const app = express();

app.set('view engine', 'ejs')

// root route
// app.get('/', (req, res) => {
//   res.send("<h1>yash panchal</h1>");
// });
// app.get('/Profile', (req, res) => {
//   res.send("<h1>yash@2212</h1>");
// });


app.get('/profile', (__, res) => {
  const user = {
    name: "YASH",
    age: 22,
    skills:['php','js','c++']
  }
  res.render('profile',{user});
});
app.listen(4200);



