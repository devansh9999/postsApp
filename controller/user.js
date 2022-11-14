function userGet(req, res, next) {
    console.log(res);
    let userId = req.params.userId;
    res.render("dashboard");
}

module.exports={
    userGet
}