const express = require('express');
const path = require('path');
require('dotenv').config({ path: path.join(process.cwd(), 'environments', `${process.env.MODE}.env`)});

const { config } = require('./constants');
const { apiRouter } = require('./routers');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', apiRouter);

app.use('*', (err, req, res, next) => {
  res
      .status(err.status || 500)
      .json({
        message: err.message,
        data: err.data
      })
})


app.listen(config.PORT, async () => {
  console.log(`Serves has started on PORT: ${config.PORT}`);
});
