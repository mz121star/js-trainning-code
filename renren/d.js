User.get(newUser.name, function (err, user) {
    if (user) err = 'Username already exists.';
    if (err) {
        console.log(err);
        return res.redirect('/reg');
    }
    newUser.save(function (err) {
        if (err) {
            req.flash('error', err);
            return res.redirect('/reg');
        }
    });
    req.session.user = newUser;
    req.flash('success', '注册成功');
    req.redirect('/');
});