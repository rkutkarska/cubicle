const express = require('express');
const app = express();
const port = 5000;

app.use('/static', express.static());

app.get('/', (req, res) => {
    res.send('Hi');
});

app.listen(5000, () => console.log(`App is listening on port ${port}...`));