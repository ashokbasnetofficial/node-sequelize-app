module.exports = (req, res, next) => {
    const path = req.originalUrl;
    const anonymousUrls = [
        '/login',
        '/logout'
    ];
    if(anonymousUrls.some(x => x == path) || req.session.userId) next();
    else {
        res.send("User not logged in");
    }
}