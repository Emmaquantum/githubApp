const { Octokit } = require("@octokit/rest");
require("dotenv").config();

// Instance the Octokit client with the GitHub token
const octokit = new Octokit({ 
  auth: process.env.GITHUB_TOKEN 
});

console.log('🔑 Token cargado:', process.env.GITHUB_TOKEN ? 'SÍ' : 'NO');

// Export the octokit instance for use in other modules
module.exports = octokit;