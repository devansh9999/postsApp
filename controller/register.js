const Queries=require("../util/db/queries");
const crypto=require("crypto");
const passport = require('passport');
const LocalStrategy = require('passport-local');



function registerGet(req, res, next) {
    res.render('register');
}
function registerPost(req, res, next) {

    var salt = crypto.randomBytes(16);
    crypto.pbkdf2(req.body.password, salt, 310000, 32, 'sha256', function(err, hashedPassword) {
        if (err) { return next(err); }
        Queries.createUser(req.body.email,req.body.username,hashedPassword,salt).then((user)=> {
            console.log("\n\n\n\n");
            console.log(user);
            res.redirect("/login");  
        })
      });
    

    
}

module.exports={
    registerGet,
    registerPost
}