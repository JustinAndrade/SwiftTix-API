const router = require("express").Router();
const bcrypt = require("bcryptjs");

const { addUser, getUserById } = require("../helpers");
const { generateToken, verifyToken } = require("../auth/authMiddleware");

router.post("/register", async (req, res) => {
  const user = req.body;
  const hash = bcrypt.hashSync(user.password, 10);
  user.password = hash;

  addUser(user)
    .then((newUser) => {
      if (newUser) {
        res.status(201).json(newUser);
      } else {
        res.status(404).json({ message: "Error creating user" });
      }
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

router.post("/login", async (req, res) => {
  let { username, password } = req.body;

  getUserById({ username })
    .first()
    .then((user) => {
      if (user && bcrypt.compareSync(password, user.password)) {
        const token = generateToken(user);
        res.status(200).json({ user, token });
      } else {
        res.status(401).json({ message: "Invald credentials." });
      }
    })
    .catch((err) => {
      if (err) return res.status(200).json({ message: err });
    });
});

module.exports = router;
