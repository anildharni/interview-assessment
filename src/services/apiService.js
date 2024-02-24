const axios = require('axios');
const { parseDrugDetails } = require('../utils/parseDrugDetails');

// Function to retrieve drug details from NLM API
async function getDrugDetails(drugName) {
    try {
        const response = await axios.get(`https://rxnav.nlm.nih.gov/REST/drugs.json?name=${encodeURIComponent(drugName)}`);
        if (!response.data || !response.data?.drugGroup || !response.data?.drugGroup?.conceptGroup) {
            throw new Error('Invalid drug details data structure');
        }         
        return parseDrugDetails(response.data); // Parsing the raw data extracted from the api
    } catch (error) {
        throw new Error('Error retrieving drug details');
    }
}

// Function to retrieve drug interactions from NLM API
async function getDrugInteractions(rxcui) {
    try {
        const response = await axios.get(`https://rxnav.nlm.nih.gov/REST/interaction/interaction.json?rxcui=${rxcui}`);
        return response.data;
    } catch (error) {
        throw new Error('API Error retrieving drug interactions');
    }
}

module.exports = {
    getDrugDetails,
    getDrugInteractions
};
