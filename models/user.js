const { default: mongoose } = require("mongoose");

// Schema for User
const userSchema = new mongoose.Schema(
  {
    name: { type: "string" },
    email: { type: "string", unique: true, require: true },
  },
  {
    timestamps: true,
  }
);

// Model for User

const User = mongoose.model("user", userSchema);

module.exports = User;
