const express = require("express");
const router = express.Router();
const { userAdd, authUser } = require("../controllers/userController");
const multer = require("multer");

var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    // Uploads is the Upload_folder_name
    cb(null, "uploads");
  },
  filename: (req, file, cb) => {
    const uniq =
      Date.now() + Math.floor(Math.random() * 10000) + file.originalname;
    cb(null, uniq);
  },
});

function fileFilter(req, file, cb) {
  if (
    file.mimetype == "image/png" ||
    file.mimetype == "image/jpg" ||
    file.mimetype == "video/mp4" ||
    file.mimetype == "image/jpeg"
  ) {
    cb(null, true);
  } else {
    cb(null, false);
    return cb(new Error("only .png , .jpg ,and .jpeg format "));
  }
}
const upload = multer({ storage: storage, fileFilter: fileFilter });

router.post("/useradd", upload.single("profile"), userAdd);
router.post("/login", authUser);

module.exports = router;
