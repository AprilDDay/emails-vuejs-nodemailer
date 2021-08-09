let User = require("./model");
let mailer = require("../../config/mailer");

exports.registerNewUser = async(req, res) => {
    try{
        let user = new User({
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone
        })
        let addedUser = await user.save();

        if (addedUser) {
            mailer.welcomeMail(req.body.email, req.body.name)
        }

        res.status(200).json({
            msg: "Welcome! Marhaban!",
            date: addedUser
        })
    }catch (err) {
        console.log("error: ", err);
        res.status(500).json({
            error: err
        })
    }
}