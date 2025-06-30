const express  = require('express');
const path     = require('path');
const sequelize= require('./db');
const students = require('./routes/students');

const PORT = process.env.PORT || 8080;
const app  = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/api/students', students);

(async () => {
  await sequelize.sync();          // auto‑creates table if needed
  app.listen(PORT, () =>
    console.log(`Server ready → http://localhost:${PORT}`)
  );
})();
