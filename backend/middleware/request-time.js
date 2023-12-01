const requestTime = (request, response, next) => {
    console.log(
        `Resuest received at ${Date.now()}: ${request.method}`
    );

    next();
};

module.exports = requestTime;