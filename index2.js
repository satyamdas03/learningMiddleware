import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});


//steps to use middleware for logging purposes
//use npm to install morgan package
//run index2.js with nodemon
//import morgan module
//mount middleware using the Express .use() method
//test the logging on the localhost and with postman