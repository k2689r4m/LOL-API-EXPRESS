//import getLastestVersion from "../Config/config";

const lolAPI = require("../Config/config");

const express = require("express");
const router = express.Router();

var vers;
lolAPI.getLastestVersion().then((version) => {
  vers = version;
});

router.get("/version", (req, res) => {
  //console.log("localhost:3001/api");
  res.send({ version: vers });
});

module.exports = router;
