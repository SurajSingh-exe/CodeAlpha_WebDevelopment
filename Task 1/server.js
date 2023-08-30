const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

const database = require("./database"); // Assuming you have a database module

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.post("/submit", async (req, res) => {
  const name = req.body.name; // Retrieve data from request body
  // Additional data handling and database insertion here
  try {
    await database.insertSurveyData(name);
    res.status(200).send("Data submitted successfully");
  } catch (error) {
    console.error(error);
    res.status(500).send("Error submitting data");
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
