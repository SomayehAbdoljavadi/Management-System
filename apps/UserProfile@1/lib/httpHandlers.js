var signup = require('./SignUpModules/signup');
var LogIn = require('./LogInModules/LogIn');
var LogOut = require('./LogOutModules/LogOut');
var GetUserInfo = require('./UserInfoModules/GetUserInfo');
var UpDateUserInfo = require('./UserInfoModules/UpDateUserInfo');
var SchemaSignUp = require('./SignUpModules/SchemaSignUp');

exports.httpHandlers = {
	SignUp: {
		POST: {
			function: signup.signup,
			dataSchema: function (headers, data, session, callback) {
				callback(null, SchemaSignUp);
			}
		}
	},
	LogIn: {
		PUT: {
			function: LogIn.LogIn
		}
	},
	LogOut: {
		PUT: {
			function: LogOut.LogOut
		}
	},
	UserInfo: {
		GET: {
			function: GetUserInfo.GetUserInfo
		},
		PUT: {
			function: UpDateUserInfo.UpDateUserInfo
		}
	}
}