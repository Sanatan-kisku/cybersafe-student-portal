import User from "../models/User.js";

export const getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);

    res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const updateProfile = async (req, res) => {
  res.json({
    success: true,
    message: "Update Profile API (Coming Soon)",
  });
};

export const changePassword = async (req, res) => {
  res.json({
    success: true,
    message: "Change Password API (Coming Soon)",
  });
};