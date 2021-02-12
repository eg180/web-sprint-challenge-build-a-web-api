const Actions = require("../actions/actions-model.js");


// function logger(req, res, next) {
//   // do your magic!
// }

function validateActionId(req, res, next) {
  // do your magic!
    const { id } = req.query;

    // check db to see if action exists for given id
    Actions.get(id)
    .then(res => {
        if (typeof(res)  === 'undefined') {
            res.status(404).json({ message: "No action exists with that id"})
        } else {
            next()
        }
    })
    .catch(err => {
        res.status(404).json(err)
    })

//     // ✕ responds with a 404 if no action with given id (13 ms)
//     if (typeof(id) !== "number" || id < 1 ) {
//     res.status(401).json({ message: "please provide valide id"})
//   } else {
//     next()
//   }
}

// function validateUser(req, res, next) {
//   // do your magic!
// }

// function validatePost(req, res, next) {
//   // do your magic!
//   const { id } = req.params;
//   if (typeof(id) !== "number" || id < 1 ) {
//     res.status(401).json({ message: "please provide valide id"})
//   } else {
//     next()
//   }


// }

// do not forget to expose these functions to other modules

module.exports = {
    // logger,
    // validateUserId,
    // validateUser,
    // validatePost
    validateActionId

}
