const { model, Schema } = require('mongoose')
const bcrypt = require('bcryptjs')

const UserSchema = new Schema(
  {
    firstName: {
      type: String,
      trim: true,
      lowercase: true,
      required: [true, "can't be blank"],
    },
    lastName: {
      type: String,
      trim: true,
      lowercase: true,
      required: [true, "can't be blank"],
    },
    email: {
      type: String,
      lowercase: true,
      unique: true,
      required: [true, "can't be blank"],
      index: true,
    },
    password: {
      type: String,
      required: true,
      set: pass => bcrypt.hashSync(pass, (saltOrRound = 10)),
    },
  },
  { timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' } }
)

UserSchema.plugin(require("mongoose-unique-validator"), {
  message: "is already taken." 
});

const User = model('User', UserSchema)

module.exports = { User, UserSchema }
