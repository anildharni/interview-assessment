function errorHandler(err, req, res, next) {
    console.error(err.stack);
    // Check if the error is a known type and handle accordingly
    if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
        res.status(400).json({ error: 'Bad Request' });
    } else {
        // Other internal server errors
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

module.exports = errorHandler;
