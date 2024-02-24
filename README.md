Challenge Description: National Library of Medicine API Integration

Your task is to create a Node.js application that consumes the National Library of Medicine (NLM) API endpoints to retrieve drug details and drug interactions. You will be working with two API endpoints: one for retrieving drug details and another for fetching drug interactions. Please scroll down to the bottom for requirements!

# Project Overview

The project is an Express.js application that serves as an interface to retrieve drug details and interactions from the National Library of Medicine (NLM) API. It includes routes to fetch drug details by name and drug interactions by RxCUI.

## File Structure

The project consists of the following main files and directories:

- **server.js**: Entry point of the application. Defines routes and sets up the Express server.
- **services/apiService.js**: Contains functions to interact with the NLM API to fetch drug details and interactions.
- **middleware/errorMiddleware.js**: Centralized error handling middleware.
- **utils/parseDrugDetails.js**: Utility function to parse drug details retrieved from the NLM API.
- **views/drugDetails.ejs**: EJS template file to render drug details in HTML format.

## Installation and Setup

To run the project locally, follow these steps:

1. Clone the repository from GitHub.
2. Install dependencies using `npm install`.
3. Set up environment variables by creating a `.env` file and defining the `PORT` variable.
4. Run the application using `npm start`.
5. Run the tests using `npm test`

## Routes

The application defines the following routes:

- **GET /drug-details/:drugName**: Fetches drug details by name.
- **GET /drug-interactions/:rxcui**: Fetches drug interactions by RxCUI.

## Dependencies

The project uses the following dependencies:

- Express.js: Web application framework for Node.js.
- Axios: HTTP client for making requests to external APIs.
- EJS: Embedded JavaScript templating engine for generating HTML.

## Testing

The project includes Jest tests to ensure the proper functioning of the API service functions. Mock responses from the NLM API are used to simulate different scenarios, including successful responses and error handling.


-------------------**----------------------

## Requirements:

   1. Implement a Node.js application that can make HTTP requests to the NLM API endpoints.
   2. Create a function that accepts a drug name as input and retrieves the drug details from the NLM API. The drug details endpoint is https://rxnav.nlm.nih.gov/REST/drugs.json?name={drug name}.
   3. Parse the response from the drug details endpoint and extract relevant information such as drug name, active ingredients, dosage forms, rxcui and any other details you find important.
   4. Create another function that accepts an RxNorm Concept Unique Identifier (RxCUI) as input and retrieves the drug interactions from the NLM API. The drug interactions endpoint is https://rxnav.nlm.nih.gov/REST/interaction/interaction.json?rxcui={rxcui}.
   5. Parse the response from the drug interactions endpoint and extract the interacting drug names and any additional details provided.
   6. Ensure proper error handling for API requests and responses.
   7. Design and implement appropriate data structures to store and represent the drug details and interactions.
   8. Write clear and concise code with proper documentation and comments.
   9. Include appropriate error handling and error responses.
   10. Implement input validation and handle edge cases (e.g., empty drug name, invalid RxCUI, etc.).
   11. Include unit tests for your function with mock responses from the NLM API.
   12. Include a README file explaining how to set up the application.

Feel free to use any Node.js libraries or tools that you find appropriate for the task.

Please create a branch of this repository to store your completed project.

Note: The NLM API documentation provides further details on the response structure and available query parameters.

    Get Drugs: https://lhncbc.nlm.nih.gov/RxNav/APIs/api-RxNorm.getDrugs.html
    Get Interactions: https://lhncbc.nlm.nih.gov/RxNav/APIs/api-Interaction.findDrugInteractions.html

Good luck, and happy coding!
