import User from "../models/user.model.js";

export const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getQtyUsers = async (req, res) => {
  try {
    const qtyUsersQuery = await User.where({ isActive: true }).countDocuments();
    res.status(200).json(qtyUsersQuery);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export const getUser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findOne({ _id: id });
    user === null
      ? res.status(404).json({ message: "The user does not exist" })
      : res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const updateUser = async (req, res) => {
  const { id } = req.params;
  const { body } = req;
  try {
    const user = await User.updateOne({ _id: id }, body);
    user.modifiedCount === 1
      ? res.status(200).json({ message: "Update Successful", user })
      : res.status(404).json({ message: "Not Update" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.deleteOne({ _id: id });
    res.status(204).json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
