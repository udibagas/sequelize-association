const express = require('express');
const app = express()
port = 3000

const { User, Profile, Task } = require('./models');

app.get('/', (req, res) => {
  const IncubatorId = req.params.IncubatorId
  User.findAll({ include: [Profile, Task] })
    .then(users => {
      res.send(users)
    })
    .catch(err => {
      res.send(err)
    })
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
})