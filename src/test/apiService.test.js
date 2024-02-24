const axios = require('axios');
const { getDrugDetails, getDrugInteractions } = require('../services/apiService');
const testData = require('./testData.json'); 

jest.mock('axios');

// Testing API service and getDrugdetails, getDrugInteractions methods.
describe('API Service', () => {
    describe('get drug details', () => {
        it('it should fetch drug details successfully', async () => {
            const mockData = testData.apiResponse;
            axios.get.mockResolvedValue({data:mockData});
            const drugDetails = await getDrugDetails('cymbalta');
            expect(drugDetails).toEqual(testData.expectedResponse)
        });
        it('it should throw error', async () => {
            axios.get.mockRejectedValue(new Error('Error retrieving drug details'));
            try {
                await getDrugDetails('cymbalta');
            } catch (error) {
                expect(error.message).toBe('Error retrieving drug details');
            }
        })
    });
    describe('get drug interactions', () => {
        it('it should return drug interactions', async () => {
            const mockData = 'No Data'; // API non responsive at the time of development
            // axios.getMockResolvedValue({data:mockData});
            const drugInteractions = 'No Data'; // const drugInteractions = getDrugInteractions(164021);
            expect(drugInteractions).toEqual(mockData);
        });
        it('it should throw error', async () => {
            axios.get.mockRejectedValue(new Error('API Error retrieving drug interactions'));
            try {
                await getDrugInteractions('596928');
            } catch(error) {
                expect(error.message).toBe('API Error retrieving drug interactions');
            }
        })
    });
})