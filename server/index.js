const express = require('express');
const bodyParser = require('body-parser');
const https = require('https');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));


app.get('/api/products', (req, res) => {
    https.get(
        'https://www.westelm.com/services/catalog/v4/category/shop/new/all-new/index.json',
        response => response.pipe(res));

});

app.listen(8000, () =>
    console.log('Express server is running on localhost:8000')
);