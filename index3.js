import express from "express";

const app = express();
const port = 3000;

function logger(req, res, next) {
  console.log("request method: ", req.method);
  console.log("request URL: ", req.url);
  next();
}

app.use(logger);

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});


//DIY MIDDLEWARE(STEPS)
//run index3.js with nodemon
//create own function called logger(req, res, next)
//inside the function console.log() the req method and the req URL.
//remember to call next()
//mount your middleware function using the Express .use() method
//test the logging on the localhost and postman