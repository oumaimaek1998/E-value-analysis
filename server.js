const express = require("express");
require("dotenv").config({ path: "./config.env" });
const connectDB = require("./config/db");
const errorHandler = require("./middleware/error");

connectDB();
const app = express();
app.use(express.json());

app.use("/auth", require("./routes/auth"));
app.use("/private", require("./routes/private"));
app.use("/projects", require("./routes/projects"));

// After middleware
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

const server = app.listen(PORT, () =>
  console.log(`Server running on port ${PORT}`)
);

process.on("unhandledRejection", (err, promise) => {
  console.log(`Logged Error: ${err.message}`);
  server.close(() => process.exit(1));
});
