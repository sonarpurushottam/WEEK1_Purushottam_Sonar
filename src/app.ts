import express from "express";
import {
  splitString,
  concatenateParams,
  isLeapYear,
  getHandshake,
} from "./logic";

const app = express();
const port = 8000;

app.get("/split/:text", (req, res) => {
  const text = req.params.text;
  const revisedString = splitString(text);
  res.json({ revisedString });
});

app.get("/concat/:param1/:param2", (req, res) => {
  const param1 = req.params.param1;
  const param2 = req.params.param2;
  const revisedString = concatenateParams(param1, param2);
  res.json({ revisedString });
});

app.get("/isLeapYear/:year", (req, res) => {
  const year = parseInt(req.params.year, 10);
  const isLeap = isLeapYear(year);

  let responseText;
  if (isLeap) {
    responseText = `${year} was a leap year.`;
  } else if (year % 100 === 0) {
    responseText = `${year} was not a leap year as it's not divisible by 400.`;
  } else {
    responseText = `${year} was not a leap year as it's not divisible by 4.`;
  }

  res.json({ responseText });
});

app.get("/handshake/:number", (req, res) => {
  const number = parseInt(req.params.number, 10);

  if (isNaN(number) || number < 1 || number > 31) {
    res.status(400).json({
      error: "Invalid number: Please enter a number between 1 and 31.",
    });
    return;
  }

  const handshake = getHandshake(number);
  res.json({ handshake });
});

app.listen(port, () => {
  console.log(`Server listening on ${port} port`);
});
