const express = require('express');
const app = express();

const { config } = require('./config');
const platziStore = require('./routes/index');
const authApi = require('./routes/auth')

app.get('/', (req, res) => {
  let userInfo = req.header("user-agent");
  res.send(`UserInfo: ${userInfo}`);
});

//body parser
app.use(express.json());

platziStore(app);
authApi(app);

app.listen(config.port, err => {
  if (err) {
    console.error("Error: ", err);
    return;
  }
  console.log(`Listening http://localhost:${config.port}`);
});