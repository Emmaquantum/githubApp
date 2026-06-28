const express = require("express");
const router = express.Router();

const githubController = require("../controllers/githubController");
const validateRepositories = require("../middlewares/validateRepositories");

// User activity routes
router.get("/search/:username", githubController.searchUsers);
router.get("/users/:username/repos", githubController.getRepos);
router.get("/users/:username/repos/:repo", githubController.getRepoDetails);

// Repository management routes
router.post("/users/:username/repos/create", githubController.createRepo);
router.put("/repos/:username/:repo", validateRepositories, githubController.updateRepo);
router.delete("/repos/:username/:repo", validateRepositories, githubController.deleteRepo);

// Branches routes
router.get("/repos/:username/:repo/branches", githubController.listBranches);
router.post("/repos/:username/:repo/branches", githubController.createBranch);

// Export routes
module.exports = router;