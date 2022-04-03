const customHeader = (req, res, next) => {
    try {
        next();
    } catch (err) {
        res.status(403);
        res.send({ error: "Error en el custom header" });
    }
}

module.exports = customHeader;