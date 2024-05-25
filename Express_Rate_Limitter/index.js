import express from "express";
import { rateLimit } from "express-rate-limit";

const app = express();

const limiter = rateLimit({
  windowMs: 1 * 60 * 1000, //Time to Reset Limit by default it is 1 min
  limit: 5, //Number of request client can hit
  //   message: "Limit Exceed", //Message send on Limit Reached
  handler: (req, res) =>
    res.send(
      `Your Daily Limit Reached Please try tomorrow and Your IP is 
      ${req.ip}`
    ),
  standardHeaders: true, //to include details about rate limiter in header
  //   legacyHeaders: false,
});

// to Apply it on all available routes or we can use it as middleware for specific route
app.use(limiter);

app.get("/express-rate-limit", (req, res) => {
  //   console.log(req.ip);
  res.send("Hello I'm Available");
});

app.listen(3001, () => {
  console.log("Test Server is Live");
});
