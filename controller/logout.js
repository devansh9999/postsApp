function logoutPost(req, res, next) {
        req.logout(function(err) {
          if (err) { return next(err); }
          res.redirect('/');
})
}

module.exports={
    logoutPost
}