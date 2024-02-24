const express = require('express');
const { getDrugDetails, getDrugInteractions } = require('./services/apiService');
const axios = require('axios');
const errorHandler = require('./middleware/errorMiddleware');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON request body
app.use(express.json());

// EJS templating engine to set the views
app.set('views', './src/views');
app.set('view engine', 'ejs');

// Route to get drug details by name
app.get('/drug-details/:drugName', async (req, res, next) => {
    const drugName = req.params.drugName;
    
    if (!drugName) {
        return res.status(400).json({ error: 'Drug name cannot be empty' });
    }
    try {
        const drugDetails = await getDrugDetails(drugName);
        if (!drugDetails) {
            res.status(404).json({ error: 'Drug details not found' });
            return;
        }
        res.render('drug-details', { drugDetails });
    } catch (error) {
        next(error); // Pass the error to the error handling middleware
    }
});

// Route to get drug interactions by RxCUI
app.get('/drug-interactions/:rxcui', async (req, res, next) => {
    const rxcui = req.params.rxcui;

    if (!rxcui || isNaN(rxcui)) {
        return res.status(400).json({ error: 'Invalid RxCUI' });
    }
    try {
        const drugInteractions = await getDrugInteractions(rxcui);
        if (!drugInteractions) {
            res.status(404).json({ error: 'Drug interactions not found' });
            return;
        }
        res.json(drugInteractions);
    } catch (error) {
        next(error); // Pass the error to the error handling middleware
    }
});

// Centralized Error Handling Middleware
app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
