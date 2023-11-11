const express = require("express");
const cors = require("cors");
const contactsRouter = require("./routes/contacts.router");
//hello
// add error handler middleware
const {
  resourceNotFound,
  handleError,
} = require("./controllers/errors.controller");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Welcome to contactbook application." });
});

app.use("/api/contacts", contactsRouter);
// Handle 404 response
app.use(resourceNotFound);
// Define error-handling middleware last
app.use(handleError);

module.exports = app;
