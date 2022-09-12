const express = require('express');

const app = express();
const port = 8000;

const server = app.listen(port, () => {
    console.log(`App listening at https://localhost:${port}`);
});

module.exports = {
    server,
    app
};
