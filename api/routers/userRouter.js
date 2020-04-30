const router = require("express").Router();

const { getUsers, addUser, editUser, delUser } = require("../helpers");

router.get("/", async (req, res) => {
  const users = await getUsers();
  res.status(200).json({ users: users });
});

router.post("/create_user", (req, res) => {
  const user = req.body;

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

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const changes = req.body;
  if (changes) {
    const user = await editUser(id, changes);
    res.status(200).json(user);
  } else {
    res.status(404).json({ messsage: "Error updating user" });
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const user = await delUser(id);
  if (user > 0) {
    res.status(200).json(user);
  } else {
    res.status(404).json({ message: "Error deleting user" });
  }
});

module.exports = router;
