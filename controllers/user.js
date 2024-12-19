const User = require("../models/user");

async function handleGetAllUsers(req, res) {
  const users = await User.find({});
  return res.json(users);
}

async function handleGetUserById(req, res) {
  const user = await User.findById(req.params.id);
  if (!user) return res.status(404).json({ message: "User not found." });
  return res.json(user);
}

async function handleUpdateUserById(req, res) {
  const user = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  if (!user) return res.status(404).json({ message: "User not found." });
  return res.json(user);
}
async function handleDeleteUserById(req, res) {
  await User.findByIdAndDelete(req.params.id);
  return res.json({ message: "User deleted." });
}
async function handleCreateNewUser(req, res) {
  if (!req.body.name || !req.body.email) {
    return res
      .status(400)
      .json({ message: "Invalid username or email address." });
  }

  const result = await User.create({
    name: req.body.name,
    email: req.body.email,
  });

  return res
    .status(200)
    .json({ message: "User Created successfully.", id: result._id });
}

module.exports = {
  handleGetAllUsers,
  handleGetUserById,
  handleUpdateUserById,
  handleDeleteUserById,
  handleCreateNewUser
};
