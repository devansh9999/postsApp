const Queries = require("../util/db/queries");

function deleteGet(req, res, next) {
    let postId=req.params.id;
    Queries.deletePost(postId).then(()=>{
        console.log("Post deleted");
        return res.redirect("/post");
    })
    // res.send("hello");
}

module.exports={
    deleteGet
}