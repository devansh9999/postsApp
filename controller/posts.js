const Queries = require("../util/db/queries");

function postsGet(req, res, next) {
    if(req.user){

        Queries.myPosts(req.user.id).then((myPosts)=>{
            
            // console.log(myPosts);
            res.render("posts",{
                myPosts
            });
        })
    }else{
        res.render("register");
    }
}
function postsPost(req, res, next) {   
    console.log(req.user.id);
    Queries.createPost(req.body.Description, req.user.id).then(()=>{
        res.redirect("/post");
    })
    
}


module.exports={
    postsGet,
    postsPost
}