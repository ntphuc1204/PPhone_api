const express = require('express');

const app = express();
const hosname = "localhost";
const port = 3000;
app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.listen(port, hosname, () => {
  console.log(`Server is running at http://${hosname}:${port}`);
});