const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const router = require("express").Router();

const Users = require("../data/helpers/users/usersModel");
const validate = require("./middleware/validate");

// Register new users
router.post("/register", validate.validateRegister, (req, res) => {
  const user = req.body;
  const hash = bcrypt.hashSync(user.password, 10);
  user.password = hash;

  Users
    .addUser(user)
    .then(() => {
      res.status(201).json({ message: "Account created" });
    })
    .catch(err => {
      res.status(500).json({ message: `${err}` });
    });
});

// Login users
router.post("/login", validate.validateLogin, (req, res) => {
  const { username, password } = req.body;

  Users
    .findUser({ username })
    .first()
    .then(user => {
      if (user && bcrypt.compareSync(password, user.password)) {
        const token = signedToken(user);

        res
          .status(200)
          .json({ 
            id: user.id, 
            token, 
            message: `${user.username} logged in`,
            user: `${user.username}`
          });
      } 
      else {
        res.status(401).json("Invalid credentials");
      }
    })
    .catch(err => {
      res.status(500).json({ message: `${err}` });
    });
});

// Creates token
function signedToken(user) {
  const payload = {
    subject: user.id,
    username: user.username
  };

  const secret = process.env.JWT_SECRET || "stay secret";

  const options = {
    expiresIn: "1h"
  };

  return jwt.sign(payload, secret, options);
}

module.exports = router;
