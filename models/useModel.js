const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter a name"],
    },
    email: {
      type: String,
      require: [true, "Please enter a email"],
      unique: true,
      trim: true,
      match: [
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        "Please enter a valid email",
      ],
    },
    password: {
      type: String,
      required: [true, "Please enter a password"],
      minLength: [6, "Password must be up to 6 characters"],
      // maxLength: [23, "Password must not be more than 23 characters"],
    },
    photo: {
      type: String,
      required: [true, "Please attach a photo"],
      default:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmBIgYj1yY-r7Fh2ZwHmaAfq8tGJTXxy5pEg&usqp=CAU",
    },
    phone: {
      type: String,
      default: "+91",
    },
    bio: {
      type: String,
      maxLength: [250, "Bio must not be more than 250 characters"],
      default: "bio",
    },
  },
  {
    //two properties to every detail created date and time
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);
module.exports = User;
