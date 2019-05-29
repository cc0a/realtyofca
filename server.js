const express = require('express');

const app = express();

app.get('/', (req, res) => res.send('API Online'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server initialized on port ${PORT}`));