const express = require('express');
const port = 5000;

const app = express();
app.get('/', (req, res) => {
    res.send('Hi');
});

app.listen(5000, () => console.log(`Server is listening on port ${port}...`));