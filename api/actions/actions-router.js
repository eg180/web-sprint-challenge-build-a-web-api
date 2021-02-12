// Write your "actions" router here!

const router = require("express").Router();
const Actions = require("./actions-model.js");


router.get("/", (req, res) => {
    Actions.get()
    .then(actions => {
        res.status(200).json(actions)
    })
    .catch(err => {
        res.status(401).json([err.error])
    })
});

router.get("/:id", (req, res) => {
    const { id } = req.params;

    Actions.get(id)
    .then(actions => {
        res.status(200).json(actions)
    })
    .catch(err => {
        res.status(401).json(err.error)
    })
});

router.post("/", (req, res) => {
    const { action } = req.body;

    Actions.insert(action)
    .then(actions => {
        res.status(200).json(actions)
    })
    .catch(err => {
        res.status(401).json(err.error)
    })
});

router.put("/:id", (req, res) => {
    const { id } = req.params;
    const { changes } = req.body;

    Actions.update(id, changes)
    .then(actions => {
        res.status(200).json(actions)
    })
    .catch(err => {
        res.status(500).json(err.error)
    })
});

router.delete("/:id", (req, res) => {
    const { id } = req.params;

    Actions.remove(id)
    .then(actions => {
        res.status(200).json(actions)
    })
    .catch(err => {
        res.status(404).json(err.error)
    })
});








module.exports = router;