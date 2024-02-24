// Parsing the raw data extracted from the api
function parseDrugDetails(data) {
    const drugGroup = data.drugGroup;
    const conceptGroups = Array.isArray(drugGroup.conceptGroup) ? drugGroup.conceptGroup : [];

    const drugDetails = {};

    conceptGroups.forEach(conceptGroup => {
        const tty = conceptGroup.tty;
        const conceptProperties = Array.isArray(conceptGroup.conceptProperties) 
            ? conceptGroup.conceptProperties.map(property => ({
                rxcui: property.rxcui || '',
                name: property.name || ''
            }))
            : [];

        drugDetails[tty] = conceptProperties;
    });

    return drugDetails;
}

module.exports = { parseDrugDetails };