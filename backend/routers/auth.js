const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");

router.post("/register", async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    const newUser = new User({
      email: req.body.email,
      password: hashedPassword,
    });
    // console.log(newUser);
    const user = newUser.save();
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post("/login", async (req, res) => {
  try {
    if (!req.body.email.includes("@gmail.com")) {
      res.status(406).json("Wrong Email ID");
    } else {
      const user = await User.findOne({ email: req.body.email });
      if (!user) {
        res.status(406).json("User Not Found");
      } else {
        const validPassword = await bcrypt.compare(
          req.body.password,
          user.password
        );
        if (validPassword) {
          res.status(200).json(user);
        } else {
          res.status(404).json("Wrong Password");
        }
      }
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
