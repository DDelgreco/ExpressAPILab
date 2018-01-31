const express = require("express");
let router = express.Router();
let chirpStore = require("../chirpsstore.js");

router.get("/", (req, res) => {
  res.send("chirps");
});
router.post("/", (req, res) => {
  chirpStore.CreateChirp(req.body);
  res.sendStatus(200);
});
router.put("/", (req, res) => {
  chirpstore.UpdateChirp(req.body);
  res.sendstatus(200);
});
router.delete("/", (req, res) => {
    chirpstore.DeleteChirp(req.body);
  res.sendStatus(200);
});

module.exports = router;
