var EmployeeService = require('./EmployeeService');
var SamadService = require('./SamadService');
var AuthenticationService = require('./AuthenticationService');
var ProfileService = require('./ProfileService');
var RollBack = require('./RollBack');
var ServiceName

exports.signup = (request, response) => {

  const promises = [EmployeeService.EmployeeService(request, response),
    SamadService.SamadService(request, response),
    AuthenticationService.AuthenticationService(request, response),
    ProfileService.ProfileService(request, response)
  ]

  Promise.allSettled(promises)
    .then((results) => {
      results.forEach((result, i) => {
          if (result.status == "fulfilled") {
            
          } else if (result.status == "rejected") {
            ServiceName = i
          }
        })
      switch (ServiceName) {
        case 0:
          RollBack.RollBack('EmployeeService', request, response);
          response.write(results[0].reason)
          break;
        case 1:
          RollBack.RollBack('SamadService', request, response);
          response.end("amadService IIIN  SingUp")
          response.write(results[0].reason)
          break;
        case 2:
          RollBack.RollBack('AuthenticationService', request, response);
          response.end("AuthenticationService IIIN  SingUp")
          response.write(results[0].reason +
            "\n" + results[2].reason.en)
          break;
        case 3:
          RollBack.RollBack('ProfileService', request, response);
          response.write(results[0].reason +
            "\n" + results[2].reason.en +
            "\n" + results[3].reason.en)
          break;
        default:
          response.sendOk("Sing Up Done")
      }
      response.end('\n' + "ProfileService IIIN  SingUp'")
    })
}