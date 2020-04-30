const router = require("express").Router();

const { getTickets, addTicket, editTicket, delTicket } = require("../helpers");

router.get("/", async (req, res) => {
  const tickets = await getTickets();
  res.status(200).json({ tickets: tickets });
});

router.post("/create_ticket", (req, res) => {
  const ticket = req.body;

  addTicket(ticket)
    .then((newTicket) => {
      if (newTicket) {
        res.status(201).json(newTicket);
      } else {
        res.status(404).json({ message: "Error creating ticket" });
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
    const ticket = await editTicket(id, changes);
    res.status(200).json(ticket);
  } else {
    res.status(404).json({ messsage: "Error updating ticket" });
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const ticket = await delTicket(id);
  if (ticket > 0) {
    res.status(200).json(ticket);
  } else {
    res.status(404).json({ message: "Error deleting ticket" });
  }
});

module.exports = router;
