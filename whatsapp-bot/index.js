require("dotenv").config();
const express = require("express");
const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const { handleMessage } = require("./messages");

app.post("/webhook", async (req, res) => {
  const message = req.body.Body;
  const from = req.body.From;
  await handleMessage(from, message, res);
});

app.listen(3000, () => console.log("Bot running on port 3000"));