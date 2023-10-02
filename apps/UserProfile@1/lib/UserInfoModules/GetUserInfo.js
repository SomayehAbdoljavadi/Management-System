var axios = require('axios');
var data

exports.GetUserInfo = (request, response) => {
  return new Promise(function (resolve, reject) {
    request.session.getSession((err, result) => {
      if (err) {
        response.sendFail(err)
      } else {
        var config = {
          method: 'get',
          url: `http://localhost:8070/dataService?id=${result.samadUsername}`,
          headers: {},
          data: data
        };
        axios(config)
          .then(function (res) {
            if (request.method != 'PUT') {
              response.write("in Get user Info User Info Is  " + JSON.stringify(res.data));
              response.end();
            }
            resolve(res)
          }).catch(function (error) {
            reject(error, '\n', " *** ", " Cant Finde  Id BY EmployeeService IIIN GetUserInfo ")
          });
      }
    })
  })
}