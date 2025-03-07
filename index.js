const express = require("express");
const mongoose = require("mongoose");
const PORT = 4000;
const app = express();
const redis = require("redis");

// Define Redis connection parameters with fallbacks
const REDIS_HOST = "redis";
const REDIS_PORT = 6379;

// connect to redis...
const client = redis.createClient({
  url: `redis://${REDIS_HOST}:${REDIS_PORT}`,
});

client.on("error", (err) => console.log("Redis Client Error", err));
client.on("connect", () => console.log("connected to redis"));
client.connect().catch(console.error);

//connect to monog...
//Define mongse parametes
const MONGO_USER = "root";
const MONGO_PASSWORD = "example";
const MONGO_PORT = 27017;
const MONGO_IP = "mongo";
const URI = `mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_IP}:${MONGO_PORT}`;
mongoose
  .connect(URI)
  .then(() => {
    console.log("connected to db");
  })
  .catch((err) => {
    console.log("err:", err);
  });

app.get("/", (req, res) => res.send("<h1>Hello Nour h111</h1>"));

app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}`);
});
