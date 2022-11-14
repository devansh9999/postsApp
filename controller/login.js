function loginGet(req, res, next) {
        res.render('login');
}
function loginPost(req, res, next) {
    let user=Queries.findUser(req.body.email);
    res.redirect(`/user/${user.id}`);
}

module.exports={
    loginGet,
    loginPost,
}