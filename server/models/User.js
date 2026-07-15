import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import crypto from "crypto";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
    },

    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      lowercase: true,
      trim: true,
    },

    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: 6,
      select: false,
    },

    resetPasswordToken: {
      type: String,
    },

    resetPasswordExpire: {
      type: Date,
    },

    quiz: {
      score: {
        type: Number,
        default: 0,
      },

      total: {
        type: Number,
        default: 0,
      },

      percentage: {
        type: Number,
        default: 0,
      },

      passed: {
        type: Boolean,
        default: false,
      },

      completedAt: {
        type: Date,
      },
    },
  },
  {
    timestamps: true,
  }
);

/*
|--------------------------------------------------------------------------
| Hash Password Before Saving
|--------------------------------------------------------------------------
*/

userSchema.pre("save", async function () {
  if (!this.isModified("password")) {
    return;
  }

  this.password = await bcrypt.hash(this.password, 10);
});
/*
|--------------------------------------------------------------------------
| Compare Password
|--------------------------------------------------------------------------
*/

userSchema.methods.matchPassword = async function (enteredPassword) {
  return bcrypt.compare(enteredPassword, this.password);
};

/*
|--------------------------------------------------------------------------
| Generate Password Reset Token
|--------------------------------------------------------------------------
*/

userSchema.methods.generateResetPasswordToken = function () {
  // Generate random token
  const resetToken = crypto.randomBytes(32).toString("hex");

  // Store hashed token
  this.resetPasswordToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");

  // Token expires in 15 minutes
  this.resetPasswordExpire = Date.now() + 15 * 60 * 1000;

  return resetToken;
};

const User = mongoose.model("User", userSchema);

export default User;