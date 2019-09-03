// GET: /scores will return the list of scores to the front-end.
// ■ POST: /scores adds a new score to the Scores table.
const express = require("express");
const scores = express.Router();
const pool = require("../server/connection");

function selectAllItems(req, res) {
  pool.query("select * from scores").then(result => {
    res.send(result.rows);
  });
}

scores.get("/scores", selectAllItems);

scores.post("/scores", (req, res) => {
  pool
    .query(
      "insert into scores (userName, score) values ($1::text, $2::smallint)",
      [req.body.username, req.body.score]
    )
    .then(() => {
      selectAllItems(req, res);
    });
});

module.exports = scores;
