//import getLastestVersion from "../Config/config";

const lolAPI = require("../Config/config");

const express = require("express");
const router = express.Router();

var vers;
lolAPI.getLastestVersion().then((version) => {
  vers = version;
});

var uName;
lolAPI.getMatchByAccountId("SEONW").then((userName) => {
  uName = userName.data.matches[0].gameId;
  console.log(userName.data.matches[0].gameId);
});

router.get("/version", (req, res) => {
  //console.log("localhost:3001/api");
  res.send({ version: vers, username: uName });
});

module.exports = router;
