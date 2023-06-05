const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const usersSchema = new Schema(
  {
    name: {
      type: String,
      unique: false,
      required: true,
    },
    email: {
      type: String,
      unique: false,
      required: true,
    },
    password: {
      type: String,
      unique: false,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const usersModel = mongoose.model('Users', usersSchema);
module.exports = usersModel;
