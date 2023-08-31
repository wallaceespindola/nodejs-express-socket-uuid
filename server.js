const express = require('express');
const app = express();
const PORT = 3000;

console.log(`####### NODE EXPRESS SERVER #######`);

app.get('/', (req, res) => {
    res.send('Hello World with node and express!');
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});