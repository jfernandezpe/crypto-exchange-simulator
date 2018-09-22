/* eslint-disable import/no-extraneous-dependencies */
const express = require('express');
const path = require('path');

const port = 8001;

const root = path.resolve(__dirname);
const app = express();
app.use(express.static(`${root}/dist`));
app.listen(port);
console.log(`Listen at port ${port}`);
