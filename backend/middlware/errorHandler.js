const customErrorHandler = (err, req, resp, next) => {
    const statusCode = resp.statusCode ? resp.statusCode : 500;
    resp.status = statusCode;
    resp.json({
        message: "please fill the text",
        stack: process.env.NODE_ENV === "development" ? err.stack : null,
    });
    next();
};
module.exports = customErrorHandler;
