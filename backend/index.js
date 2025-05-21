import express from 'express';
import cors from 'cors';
import proverbs from './data/proverbs.js';  

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// Log requests
app.use((req, res, next) => {
    console.log(`${req.method} request for '${req.url}'`);
    next();
});

// CRUD Operations

// Get all proverbs
app.get('/proverbs', (req, res) => {
    res.json(proverbs);
});

// Get a proverb by ID
app.get('/proverbs/:id', (req, res) => {
    const { id } = req.params;
    const proverb = proverbs.find(p => p.id === id);
    if (proverb) {
        res.json(proverb);
    } else {
        res.status(404).json({ message: 'Proverb not found' });
    }
});

// Get proverbs by category
app.get('/category/:category', (req, res) => {
    const { category } = req.params;
    const filtered = proverbs.filter(p => p.category === category);
    res.json(filtered);
});

// Create a new proverb
app.post('/proverbs', (req, res) => {
    const newProverb = req.body;
    proverbs.push(newProverb);
    res.status(201).json(newProverb);
});

// Update a proverb by ID
app.put('/proverbs/:id', (req, res) => {
    const { id } = req.params;
    const index = proverbs.findIndex(p => p.id === id);
    if (index !== -1) {
        proverbs[index] = { ...proverbs[index], ...req.body };
        res.json(proverbs[index]);
    } else {
        res.status(404).json({ message: 'Proverb not found' });
    }
});

// Delete a proverb by ID
app.delete('/proverbs/:id', (req, res) => {
    const { id } = req.params;
    const index = proverbs.findIndex(p => p.id === id);
    if (index !== -1) {
        const deleted = proverbs.splice(index, 1);
        res.json(deleted[0]);
    } else {
        res.status(404).json({ message: 'Proverb not found' });
    }
});

// Get a random proverb
app.get('/random-proverb', (req, res) => {
    const randomIndex = Math.floor(Math.random() * proverbs.length);
    res.json(proverbs[randomIndex]);
});

app.use((req, res) => {
    res.status(404).json({ message: 'not found' });
});

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));