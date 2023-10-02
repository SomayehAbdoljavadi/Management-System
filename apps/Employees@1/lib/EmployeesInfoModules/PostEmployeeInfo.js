var axios = require('axios');
var data

exports.PostEmployeeInfo = (request, response) => {
    return new Promise(function (resolve, reject) {
        var config = {
            method: 'post',
            url: 'http://localhost:8070/dataService',
            headers: {
                'Content-Type': 'application/json'
            },
            data: request.data
        }
        axios(config)
            .then(function (res) {
                resolve(res)
            }).catch(function (error) {
                reject(error.response.data)
            });
    })
}