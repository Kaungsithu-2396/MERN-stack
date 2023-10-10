const express = require("express");
const app = express();
const errorHandler = require("./middlware/errorHandler");
const dotenv = require("dotenv");
const goalRoutes = require("./routes/goalRoutes");
dotenv.config({ path: "./config.env" });
const port = process.env.PORT;
//route collection
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api/goals", goalRoutes);
app.use(errorHandler);

app.listen(port, () => {
    console.log(`app starts running on ${port}`);
});
