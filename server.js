const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3001;
const notes = require('./Develop/db/db');


app.get('/api/notes', (req, res) => {
    // let results = notes;
    res.json(notes)
});
// app.use()
app.use(express.static('./Develop/public'))
// Routes to send html files
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './Develop/public/index.html'));
});
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './Develop/public/notes.html'));
});

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});