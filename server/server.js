require("dotenv").config();
const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");
const userRoute = require("./routes/userRoute");
const noteRoute = require("./routes/noteRoute");
const { notFound, errorHandler } = require("./middlewares/errorMiddleware");

connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/users", userRoute);
app.use("/api/notes", noteRoute);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 7000;

app.listen(PORT, () => {
  console.log(`Server started on ${PORT}`);
});
