const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
    name: {
        type: String,
        require: [true, "Please include your name."]
    }, 
    email: {
        type: String,
        require: [true, "Please include your email."]
    }, 
    phone: {
        type: String, 
        require: [true, "Please include your phone number."]
    }
});

const User = mongoose.model("User", userSchema);
module.exports = User;