const express = require("express");
const cors = require("cors");
const app = express();
const scores = require("../server/scores.api");
const questions = require("../server/question.api");

app.use(cors());
app.use(express.json());
app.use("/", scores);
app.use("/", questions);

const port = 8080;
app.listen(port, () => console.log(`Server running on PORT:  ${port}!`));
