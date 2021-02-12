// Write your "projects" router here!
// Write your "actions" router here!

const router = require("express").Router();
const Projects = require("./projects-model.js");


router.get("/", (req, res) => {
    Projects.get()
    .then(projects => {
        res.status(200).json(projects)
    })
    .catch(err => {
        res.status(401).json(err.error)
    })
});

router.get("/:id", (req, res) => {
    const { id } = req.params;

    Projects.get(id)
    .then(projects => {
        res.status(200).json({ id: id, projects})
    })
    .catch(err => {
        res.status(404).json(err.error)
    })
});

router.post("/", (req, res) => {
    const { action } = req.body;

    Projects.insert(action)
    .then(projects => {
        res.status(200).json(projects)
    })
    .catch(err => {
        res.status(400).json(err.error)
    })
});

router.put("/:id", (req, res) => {
    const { id } = req.params;
    const { changes } = req.body;

    Projects.update(id, changes)
    .then(projects => {
        res.status(200).json(projects)
    })
    .catch(err => {
        res.status(401).json(err.error)
    })
});

router.delete("/:id", (req, res) => {
    const { id } = req.params;

    Projects.remove(id)
    .then(projects => {
        res.status(200).json(projects)
    })
    .catch(err => {
        res.status(401).json(err.error)
    })
});








module.exports = router;