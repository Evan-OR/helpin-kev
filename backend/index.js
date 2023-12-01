require('dotenv').config();
const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

let public_dir = path.join(__dirname, 'dist');
app.use(express.static(public_dir));

app.get('/', (req, res) => {
    const indexPath = path.join(__dirname, 'dist', 'index.html');
    res.sendFile(indexPath);
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
