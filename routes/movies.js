const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  const { user } = req.cookies;
  console.log(user);
  res.send(`Hallo Movies ${user}`);
});
router.get("/create", (req, res) => {
  res.send("Hallo Movies Create");
});
router.get("/:id", (req, res) => {
  res.send("Hallo Movies Showw");
});

module.exports = router;
