const router = require("express").Router();

const { getTickets } = require("../helpers");

router.get("/", async (req, res) => {
  const tickets = await getTickets();
  res.status(200).json({ tickets: tickets });
});

module.exports = router;
