const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');
const PORT = process.env.PORT || 3001;
const {notes} = require('./Develop/db/db');
const router = require('express').Router();

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static('./Develop/public'))

app.get('/api/notes', (req, res) => {
    res.json(notes)
});
app.post('/api/notes', (req, res) => {
    req.body.id = notes.length.toString();
    const note = req.body;
    notes.push(note)
    fs.writeFileSync(
        path.join(__dirname, './Develop/db/db.json'),
        JSON.stringify({notes: notes}, null, 2)
    );
    res.json(note)
});
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './Develop/public/index.html'));
});
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './Develop/public/notes.html'));
});
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});