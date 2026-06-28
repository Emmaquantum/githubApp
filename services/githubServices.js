const octokit = require('../config/github'); // ✅ importamos la instancia

// Helper para obtener el SHA de la rama por defecto (necesario para crear branch)
const getRepoDefaultBranchSha = async (username, repo) => {
  const { data } = await octokit.rest.repos.get({ owner: username, repo });
  const defaultBranch = data.default_branch;
  const { data: refData } = await octokit.rest.git.getRef({
    owner: username,
    repo,
    ref: `heads/${defaultBranch}`,
  });
  return refData.object.sha;
};

// Función para buscar a un usuario por nombre de usuario
const searchUsers = async (query) => {
    try {
        const response = await octokit.rest.search.users({
            q: query,
            per_page: 10
        });
        return response.data.items;
    } catch (error) {
        console.error("Error searching users:", error);
        console.error("Detalles:", error);
        res.status(500).json({ error: "Error searching users" });
    }
};

// Función para obtener repositorios de un usuario
const getUserRepos = async (username) => {
  try {
    const response = await octokit.rest.repos.listForUser({
      username,
    });
    return response.data.map(repo => repo.name);
  } catch (error) {
    console.error("Error fetching user repositories:", error);
    throw error;
  }
};

const getRepoDetails = async (username, repo) => {
  try {
    const response = await octokit.rest.repos.get({
      owner: username,
      repo,
    });
    return {
        name: response.data.name,
        description: response.data.description,
    };
  } catch (error) {
    console.error("Error fetching repository details:", error);
    throw error;
  }
};

const createRepo = async (repoName, description, isPrivate) => {
  try {
    const response = await octokit.rest.repos.createForAuthenticatedUser({
      name: repoName,
      description,
      private: isPrivate,
    });
    return response.data;
  } catch (error) {
    console.error("Error creating repository:", error);
    throw error;
  }
};

const updateRepo = async (username, repo, newName, newDescription) => {
  try {
    const response = await octokit.rest.repos.update({
      owner: username,
      repo,
      name: newName,
      description: newDescription,
    });
    return response.data;
  } catch (error) {
    console.error("Error updating repository:", error);
    throw error;
  }
};

const deleteRepo = async (username, repo) => {
  try {
    const response = await octokit.rest.repos.delete({
      owner: username,
      repo,
    });
    return response.data;
  } catch (error) {
    console.error("Error deleting repository:", error);
    throw error;
  }
};

const listBranches = async (username, repo) => {
  try {
    const response = await octokit.rest.repos.listBranches({
      owner: username,
      repo,
    });
    return response.data;
  } catch (error) {
    console.error("Error listing branches:", error);
    throw error;
  }
};

const createBranch = async (username, repo, branchName) => {
  try {
    const response = await octokit.rest.repos.createRef({
      owner: username,
      repo,
      ref: `refs/heads/${branchName}`,
      sha: await getRepoDefaultBranchSha(username, repo),
    });
    return response.data;
  } catch (error) {
    console.error("Error creating branch:", error);
    throw error;
  }
};

module.exports = {
  searchUsers,
  getUserRepos,
  getRepoDetails,
  createRepo,
  updateRepo,
  deleteRepo,
  listBranches,
  createBranch
};