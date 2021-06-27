const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");



const app = express();

app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true });
mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost/workout',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    }
  );

app.use(require("./routes/api.js"));
app.use(require("./routes/html.js"));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Our app is running on port ${ PORT }`);
});
