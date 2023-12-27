const express = require("express");
const router = express.Router();

router.use((req, res, next) => {
  if (req.query.isAdmin) {
    next();
  } else {
    res.send("You Are Not An Admin");
  }
});

router.get("/", (req, res) => {
  res.cookie("user", "RiskiDN");
  res.cookie("token", "123456abcd");
  res.send("ADMINISTRATOR");
});

module.exports = router;
