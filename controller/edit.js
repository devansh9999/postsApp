const Queries = require("../util/db/queries");



function editGet(req, res, next) {
    let id= req.params.id;
    res.render("edit.hbs",{
        id
    });
}
function editPost(req, res, next) {
    let id= req.params.id;
    Queries.updatePost(id,req.body.Description).then(()=>{

        res.redirect("/post");

    }).catch(err=>{
        console.log("error");
    })

}

module.exports={
    editGet,editPost
}