require('dotenv').config()
const express = require("express");
const helmet = require('helmet');
const cors = require('cors');

const actionsRouter = require("./actions/actions-router.js");
const projectsRouter = require("./projects/projects-router.js");

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use("/api/actions", actionsRouter);
server.use("/api/projects", projectsRouter);

server.use("/api/*", (_, res) => {
    res.json({ data: "IT'S ALIVE!" })
})

// Complete your server here!
// Do NOT `server.listen()` inside this file!

module.exports = server;
