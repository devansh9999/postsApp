const Posts= require('./Post.js');
const User= require('./User.js');

User.hasMany(Posts)
// Posts.belongsTo(User,{foreignKey:"userKIId"});