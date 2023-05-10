// import all depedencies
require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const router = require("./router");
const multer = require("multer");
const { createProxyMiddleware } = require("http-proxy-middleware");

// port
const port = 4000 || process.env.PORT;

// configure
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("uploads"));
app.use((err, req, res, next) => {
  console.log(err.stack);
  res.status(500).json({ message: "Internal Server Error" });
});

// uploading file in folder uploads
const fileStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, __dirname + "/uploads");
  },
  filename: function (req, file, cb) {
    if (file) {
      cb(null, new Date().getTime() + "-" + file.originalname);
    }
  },
});

// filtering file ekstension
const fileFilter = (req, file, cb) => {
  if (
    file.mimetype === "image/png" ||
    file.mimetype === "image/jpeg" ||
    file.mimetype === "image/jpg"
  ) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

app.use(
  multer({ storage: fileStorage, fileFilter: fileFilter }).single("image")
);

app.use("/api/blogme", router);
mongoose
  .connect(process.env.DB_LINK)
  .then(() => {
    app.listen(port, () => console.log(`run at port ${port}`));
  })
  .catch((err) => {
    console.log(err);
  });
