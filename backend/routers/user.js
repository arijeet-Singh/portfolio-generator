const router = require("express").Router();
const User = require("../models/User");

router.get("/preview/:id", async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.params.id });
    res.status(200).json(user);
  } catch (err) {
    return res.status(500).json(err);
  }
});

router.get("/website/:id", async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.params.id });
    res.status(200).json(user);
  } catch (err) {
    return res.status(500).json(err);
  }
});

router.put("/details/about/:id", async (req, res) => {
  try {
    const user = await User.findOneAndUpdate(
      { _id: req.params.id },
      { about: req.body.about }
    );
    res.status(200).json(user);
  } catch (err) {
    return res.status(500).json(err);
  }
});

router.put("/details/title/:id", async (req, res) => {
  try {
    const user = await User.findOneAndUpdate(
      { _id: req.params.id },
      { $push: { title: req.body } }
    );
    res.status(200).json(user);
  } catch (err) {
    return res.status(500).json(err);
  }
});

router.put("/details/experience/:id", async (req, res) => {
  try {
    const user = await User.findOneAndUpdate(
      { _id: req.params.id },
      { $push: { experience: req.body } }
    );
    res.status(200).json(user);
  } catch (err) {
    return res.status(500).json(err);
  }
});

router.put("/details/skill/:id", async (req, res) => {
  try {
    const user = await User.findOneAndUpdate(
      { _id: req.params.id },
      { $push: { skill: req.body.skill } }
    );
    res.status(200).json(user);
  } catch (err) {
    return res.status(500).json(err);
  }
});

router.put("/details/work/:id", async (req, res) => {
  try {
    const user = await User.findOneAndUpdate(
      { _id: req.params.id },
      { $push: { work: req.body } }
    );
    res.status(200).json(user);
  } catch (err) {
    return res.status(500).json(err);
  }
});

router.put("/details/testimonials/:id", async (req, res) => {
  try {
    const user = await User.findOneAndUpdate(
      { _id: req.params.id },
      { $push: { testimonials: req.body } }
    );
    res.status(200).json(user);
  } catch (err) {
    return res.status(500).json(err);
  }
});

router.put("/details/contact/:id", async (req, res) => {
  try {
    const user = await User.findOneAndUpdate(
      { _id: req.params.id },
      { contact: req.body }
    );
    res.status(200).json(user);
  } catch (err) {
    return res.status(500).json(err);
  }
});

router.put("/delete/:id/:title", async (req, res) => {
  try {
    const user = await User.findOneAndUpdate(
      { _id: req.params.id },
      { $pull: { title: req.params.title } }
    );
    res.status(200).json(user);
  } catch (err) {
    return res.status(500).json(err);
  }
});
router.put("/delete/title/:id/:title", async (req, res) => {
  try {
    const user = await User.findOneAndUpdate(
      { _id: req.params.id },
      { $pull: { title: { titleName: req.params.title } } }
    );
    res.status(200).json(user);
  } catch (err) {
    return res.status(500).json(err);
  }
});
router.put("/delete/skill/:id/:skill", async (req, res) => {
  try {
    const user = await User.findOneAndUpdate(
      { _id: req.params.id },
      { $pull: { skill: req.params.skill } }
    );
    res.status(200).json(user);
  } catch (err) {
    return res.status(500).json(err);
  }
});
router.put("/delete/experience/:id/:company", async (req, res) => {
  try {
    const user = await User.findOneAndUpdate(
      { _id: req.params.id },
      { $pull: { experience: { company: req.params.company } } }
    );
    res.status(200).json(user);
  } catch (err) {
    return res.status(500).json(err);
  }
});
router.put("/delete/work/:id/:projectName", async (req, res) => {
  try {
    const user = await User.findOneAndUpdate(
      { _id: req.params.id },
      { $pull: { work: { projectName: req.params.projectName } } }
    );
    res.status(200).json(user);
  } catch (err) {
    return res.status(500).json(err);
  }
});
router.put("/delete/testimonials/:id/:name", async (req, res) => {
  try {
    const user = await User.findOneAndUpdate(
      { _id: req.params.id },
      { $pull: { testimonials: { name: req.params.name } } }
    );
    res.status(200).json(user);
  } catch (err) {
    return res.status(500).json(err);
  }
});
module.exports = router;
