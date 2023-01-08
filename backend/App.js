const express = require("express");

const app = express();
const PORT = 5000;

app.get("/api", async (req, res) => {
  try {
    const data = await fetch(
      "https://newsapi.org/v2/top-headlines?country=us&apiKey=57834d0a81c74f13b0390aa8fae15f6c"
    );
    const newData = await data.json();
    res.send(newData);
    console.log(newData);
  } catch (error) {
    console.log("There was an error");
    console.log(error);
  }
});

app.listen(3005, () => {
  console.log("Server is running");
});
