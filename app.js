const express = require("express");
const app = express();
const cors = require("cors");
const { performance, PerformanceObserver } = require("perf_hooks");
const corsOptions = {
  origin: "*",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//add the router
const router = require("./routes/routes");
app.use("/", router);
app.listen(8000, () => {
  console.log("server is running");
});
