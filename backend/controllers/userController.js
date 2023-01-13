const asyncHandler = require("express-async-handler");
let User = require("../models/UserModel");
const genrateWebToken = require("../utils/genratetoken");
const fs = require("fs");
const path = require("path");

// Define the maximum size for uploading
// picture i.e. 1 MB.
const maxSize = 1 * 1000 * 1000;

exports.userAdd = asyncHandler(async (req, res) => {
  const { name, email, password, pic } = req.body;

  const UserExists = await User.findOne({ email });
  if (UserExists) {
    res.status(400);
    throw new Error("User Already Exists");
  }

  const user = await User.create({
    name,
    email,
    password,
    pic,
    // pic: {
    //   data: fs.readFileSync(
    //     path.join(__dirname, "../../uploads/" + req.file.filename)
    //   ),
    //   ContentType: "image/jpg",
    // },
  });
  user.save();
  // let respond = await user.save();

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      password: user.password,
      isAdmin: user.isAdmin,
      pic: user.pic,
      token: genrateWebToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Error Occured!");
  }
});

exports.authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      pic: user.pic,
      token: genrateWebToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid Email And Password");
  }
});
