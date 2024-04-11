// server.js

const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors')
console.log(__dirname);

app.use(cors());


app.use(express.static(path.join(__dirname, 'public')));
console.log(__dirname);

app.get('/api/properties', (req, res) => {
    res.sendFile(path.join(__dirname, 'public','properties_language_arm.json'));
})
console.log(__dirname);


const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
