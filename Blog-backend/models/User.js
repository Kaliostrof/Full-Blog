const mongoose = require("mongoose");
const roles = require("../constants/roles");

const UserSchema = mongoose.Schema(
  {
    login: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: Number,
      default: roles.USER,
    },
  },
  { timestamps: true }
); //благодаря этому будет к каждому объекту добавлять поля createdAt и updatedAt(даты создания и редактирования)

const User = mongoose.model("User", UserSchema);

module.exports = User;
