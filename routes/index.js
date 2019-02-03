const express = require("express");
const router = express.Router();

// Do work here
router.get("/", (req, res) => {
  const nick = { name: "nick", age: 35, cool: true };
  // res.send("Hey! It works!");
  // res.json(nick);
  // res.send(req.query.name);
  // res.json(req.query);
  res.render("hello", {
    name: "nick",
    dog: req.query.dog
  });
});

router.get("/reverse/:name", (req, res) => {
  const reverse = [...req.params.name].reverse().join("");
  res.send(reverse);
});

module.exports = router;
