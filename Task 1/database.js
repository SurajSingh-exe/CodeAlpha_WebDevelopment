// Assuming you're using a database like MongoDB

const { MongoClient } = require("mongodb");
const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

let db;

async function connectDB() {
  await client.connect();
  db = client.db("surveyDB");
}

async function insertSurveyData(name) {
  const surveyCollection = db.collection("surveys");
  await surveyCollection.insertOne({ name });
}

module.exports = {
  connectDB,
  insertSurveyData
};
