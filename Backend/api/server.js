const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const authRouter = require("../auth/authRouter");
const usersRouter = require("../data/helpers/users/usersRouter");
const itemsRouter = require("../data/helpers/items/itemsRouter");
const categoryRouter = require("../data/helpers/categories/categoryRouter");
const locationRouter = require("../data/helpers/location/locationRouter");

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.get("/", (req, res) => {
  res.status(200).json({ message: "It's working" });
});

server.use("/api/auth", authRouter);
server.use("/api/users", usersRouter, itemsRouter);
server.use("/api/category", categoryRouter, itemsRouter);
server.use("/api/location", locationRouter, itemsRouter);

module.exports = server;
