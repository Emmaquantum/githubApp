const githubServices = require("../services/githubServices");

// Controller functions for GitHub user activity
const searchUsers = async (req, res) => {
    const { username } = req.params;
    try {
        const users = await githubServices.searchUsers(username);
        res.status(200).json(users);
    } catch (error) {
        console.error('❌ Error en searchUsers:', error.message);
        console.error('📦 Detalles:', error);
        res.status(500).json({ 
            error: "Error searching users",
            details: error.message   // 👈 ESTO TE MUESTRA EL ERROR REAL
        });
    }
};
const getRepos = async (req, res) => {
    const username = req.params.username;
    try {
        const repos = await githubServices.getUserRepos(username);
        res.status(200).json(repos);
    } catch (error) {
        console.error('Error en getRepos:', error.message);
        console.error('Detalles:', error);
        res.status(500).json({ error: "Error fetching user repositories" });
    }
};

const getRepoDetails = async (req, res) => {
    const { username, repo } = req.params;
    try {
        const repoDetails = await githubServices.getRepoDetails(username, repo);
        res.status(200).json(repoDetails);
    } catch (error) {
        console.error('Error en getRepoDetails:', error.message);
        console.error('Detalles:', error);
        res.status(500).json({ error: "Error fetching repository details" });
    }
};

// Repository management controller functions
const createRepo = async (req, res) => {
    const { repoName, description, isPrivate } = req.body;
    try {
        const newRepo = await githubServices.createRepo(repoName, description, isPrivate);
        res.status(201).json(newRepo);
    } catch (error) {
        console.error('Error en createRepo:', error.message);
        console.error('Detalles:', error);
        res.status(500).json({ error: "Error creating repository" });
    }
};

const updateRepo = async (req, res) => {
    const { username, repo } = req.params;
    const { newName, newDescription } = req.body;
    try {
        const updatedRepo = await githubServices.updateRepo(username, repo, newName, newDescription);
        res.status(200).json(updatedRepo);
    } catch (error) {
        console.error('Error en updateRepo:', error.message);
        console.error('Detalles:', error);
        res.status(500).json({ error: "Error updating repository" });
    }
};

const deleteRepo = async (req, res) => {
    const { username, repo } = req.params;
    try {
        await githubServices.deleteRepo(username, repo);
        res.status(200).json({ message: "Repository deleted successfully" });
    } catch (error) {
        console.error('Error en deleteRepo:', error.message);
        console.error('Detalles:', error);
        res.status(500).json({ error: "Error deleting repository" });
    }
};

const listBranches = async (req, res) => {
    const { username, repo } = req.params;
    try {
        const branches = await githubServices.listBranches(username, repo);
        res.status(200).json(branches);
    } catch (error) {
        console.error('Error en listBranches:', error.message);
        console.error('Detalles:', error);
        res.status(500).json({ error: "Error fetching repository branches" });
    }
};

const createBranch = async (req, res) => {
    const { username, repo } = req.params;
    const { newBranchName, sourceBranch } = req.body;
    try {
        const newBranch = await githubServices.createBranch(username, repo, newBranchName, sourceBranch);
        res.status(201).json(newBranch);
    } catch (error) {
        console.error('Error en createBranch:', error.message);
        console.error('Detalles:', error);
        res.status(500).json({ error: "Error creating branch" });
    }
};


module.exports = {
    searchUsers,
    getRepos,
    getRepoDetails,
    createRepo,
    updateRepo,
    deleteRepo,
    listBranches,
    createBranch
};