const path = require('path');
const express = require('express');
const app = express();
const PORT = 8000;
const hbs=require('hbs');
var passport = require('passport');
var LocalStrategy = require('passport-local');
var crypto = require('crypto');
const Queries = require('./util/db/queries');
const Post=require("./Models/Post");
const User=require("./Models/User");
const Sequelize=require('./util/db/sequelize');
const sqlite3=require('sqlite3');
const mappings=require('./Models/mappings');

var session = require('express-session');
var db = new sqlite3.Database('./var/db/todos.db');

var SQLiteStore = require('connect-sqlite3')(session);


app.set('view engine','hbs');
app.use(express.urlencoded({extended:true}));


hbs.registerPartials(path.join(__dirname+'/views'));


app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false,
  store: new SQLiteStore({ db: 'sessions.db', dir: './var/db' })
}));
app.use(passport.authenticate('session'));



passport.use(new LocalStrategy(function verify(username, password, cb) {

    Queries.findUser(username).then((user)=>{
        console.log(user);
        if(user!=null){ 
            crypto.pbkdf2(password, user.salt, 310000, 32, 'sha256', function(err, hashedPassword) {
                if (err) { return cb(err); }
                if (!crypto.timingSafeEqual(user.password, hashedPassword)) {
                    return cb(null, false, { message: 'Incorrect username or password.' });
                }
                return cb(null, user);
            });
        }else{
            return cb(null,false,{message:"You haven't registered"});
        }
    })
    }));
    



app.get("/",(req, res) => {
    res.render("homePage");
})
const postsRouter=require('./routes/posts.js');
app.use("/post",postsRouter);
const userRouter=require('./routes/user.js');
app.use("/user",userRouter);

const loginRouter=require('./routes/login.js');
app.use("/login",loginRouter);

const logoutRouter=require('./routes/logout.js');
app.use("/logout",logoutRouter);

const registerRouter=require('./routes/register.js');
app.use("/register",registerRouter);

const deleteRouter=require('./routes/delete.js');
app.use("/delete",deleteRouter);

const editRouter=require('./routes/edit.js');
app.use("/edit",editRouter);

passport.serializeUser(function(user, done) {
    done(null, user);
  });
  
  passport.deserializeUser(function(user, done) {
    done(null, user);
  });


Sequelize.sync().then(()=>{
let u=User.create({email:"email",username:"username",password:"password",salt:"salt"});
console.log("hellllooo");
// console.log(u);
return u;
}).then((u)=>{
    // console.log(u.email);
    app.listen(PORT,()=>{
        console.log(`http://localhost:`+PORT);
    })
}).catch((err) => console.log("ERRRRRRRRRRRRRRRRRRRRRRR"+err.message));