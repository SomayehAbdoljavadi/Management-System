exports.LogIn = (request, response) => {
    var AuthenticationService = require('./AuthenticationService');

    AuthenticationService.AuthenticationService(request, response)
        .then(function (res) {
            var Sessiondata = {
                "samadUsername": res[0],
                ip: '127.0.0.1',
                "roles": res[1]
            };
            request.session.start(Sessiondata, function (err, result) {
                if (result) {
                    var SessionToken = result.token;
                    response.setHeader("set-cookie", `token=${SessionToken};Path=/`);

                    let dataObject = {
                        'myKey1': res[0]
                    };
                    request.session.set(dataObject, function (err, res) {
                        if (err) {
                            console(err);
                        } else {
                            console.log('set ok')
                        }
                    });
                    response.write("Successfully LogIn User  " + res[0])
                    response.end()
                } else {
                    response.sendFail(err)
                }
            })
        }).catch(function (error) {
            response.sendFail(err)
        })
}