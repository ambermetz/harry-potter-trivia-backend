const express = require("express");
const questions = express.Router();
const pool = require("../server/connection");

function selectAllItems(req, res) {
  pool
    .query("select * from questions ORDER BY random() limit 10")
    .then(result => {
      res.send(result.rows);
    });
}

questions.get("/questions", selectAllItems);

module.exports = questions;
