const Projects = require("../projects/projects-model.js");
const Actions = require("../actions/actions-model.js");

async function validateActionId(req, res, next) {
  const id = req.params.id;
  try {
    const action = await Actions.getbyId(id);
    if (!action) {
      res.status(400).json({ message: `${id} not found.` });
    } else {
      next();
    }
  } catch (error) {
    res.status(500).json(`Error: ${error}`);
  }
}

async function checkProjBody(req, res, next) {
  const { name, description } = req.body;
  try {
    if (!name || !description) {
      res
        .status(400)
        .json({
          message: `New projects must contain all of the following: name, description`,
        });
    } else {
      next();
    }
  } catch (error) {
    res.status(500).json({ message: `Server Error: ${error}` });
  }
}

async function checkActionBody(req, res, next) {
  const { project_id, description, notes } = req.body;
  try {
    if (!project_id || !description || !notes) {
      res.status(400).json('Please provide all required fields');
    } else {
      next();
    }
  } catch (error) {
    res.status(500).json({ message: `Error: ${error}` });
  }
}
async function checkProjId(req, res, next) {
  const id = req.params.id;
  try {
    const project = await Projects.getbyId(id);
    if (!project) {
      res.status(400).json({ message: `No project with Id:${id}` });
    } else {
      req.projects = project;
      next();
    }
  } catch (error) {
    res.status(404).json(`Server Error: ${error}`);
  }
}


module.exports = {
  checkProjId,
  validateActionId,
  checkProjBody,
  checkActionBody,
};