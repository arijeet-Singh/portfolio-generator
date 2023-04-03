const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  ID: {
    default: mongoose.Types.ObjectId,
  },
  email: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
  },
  about: {
    type: Array,
  },
  title: {
    titleName: {
      type: String,
    },
    titleRating: {
      type: String,
    },
    type: Array,
  },
  experience: {
    jobTitle: {
      type: String,
    },
    company: {
      type: String,
    },
    joining: {
      type: String,
    },
    leaving: {
      type: String,
    },
    responsibilities: {
      type: String,
    },
    type: Array,
  },
  skill: {
    type: Array,
  },
  work: {
    projectName: {
      type: String,
    },
    link: {
      type: String,
    },
    description: {
      type: String,
    },
    type: Array,
  },
  testimonials: {
    name: {
      type: String,
    },
    designation: {
      type: String,
    },
    organization: {
      type: String,
    },
    feedback: {
      type: String,
    },
    type: Array,
  },
  contact: {
    fullName: {
      type: String,
    },
    email: {
      type: String,
    },
    phone: {
      type: String,
    },
    type: Array,
  },
});

module.exports = mongoose.model("User", UserSchema);
