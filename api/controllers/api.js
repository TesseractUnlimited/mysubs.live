exports.getData = (req, res, next) => {
    res.status(200).json({
        express: "Hi Bitch"
    });
};