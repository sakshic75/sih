const express = require('express');
const app = express();
const route = require('./route');

app.use('/route', route);
// here we pass in the imported route object

app.listen(5000, () => console.log('Example app listening on port 3000!'));