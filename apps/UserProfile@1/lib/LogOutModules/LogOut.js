exports.LogOut = (request, response) => {
    var currentToken = request.cookie.token
    request.session.remove(function (err, result) {
        if (result) {
            response.setHeader("set-cookie", request.cookie = [])
            response.write("Successfully LogOut User  ")
            response.end()
        } else {
            response.sendFail(err)
        }
    })
}