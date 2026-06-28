const validateRepositories = (req, res, next) => {
    const { username, repo } = req.params;
    if (!username || !repo) {
        return res.status(400).json({ error: "Username and repository name are required" });
    }
    // Additional validation logic can be added here if needed
    next();
};

module.exports = validateRepositories;