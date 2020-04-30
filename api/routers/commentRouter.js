const router = require("express").Router();
const { getComments } = require("../helpers");

router.get("/", async (req, res) => {
  const comments = await getComments();
  if (comments.length > 0) {
    res.status(200).json(comments);
  } else {
    res.status(404).json({ message: "No comments exist" });
  }
});

module.exports = router;
