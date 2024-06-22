import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});


//steps to use body-parser
//use npm to install the body-parser module
//run index1.js with nodemon
//import the body-parser module
//mount the middleware using the Express .use() method
//specify .urlencoded({extended : true}) to create a body for URL-encoded requests like our form submission
//write a .post("/submit") handler where you console.log() the form contents when the submit button is clicked 
