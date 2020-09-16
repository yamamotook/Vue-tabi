const userDao = require('../dao/userDao.js');
async function emailCheck(email, isLogin){
	let result = {};
	const ref = 'email';
	if(!email){
		result = {
			status : 400,
			errorQuery : ref,
			errorMsg : 'Email address cannot be null'
		}
		return result;
	}else{
		//check Invalid
		if(!isLogin){
			const pattern = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/; // email reg
			if(!pattern.test(email)){
				result = {
					status : 400,
					errorQuery : ref,
					errorMsg : 'Invalid email address'
				}
				return result;
			}
			
			//check repeat
			const isQunique = await new Promise((resolve, reject) =>{
				userDao.emailUnique(email, function(data){
					resolve(data.length ? true : false);
				}); 
			})
			if(isQunique){
				result = {
					status : 400,
					errorQuery : ref,
					errorMsg : 'Email address is already in use'
				}
				return result;
			}
		}
	}
}


function usernameCheck(username){
	let result = {};
	const ref = 'username';
	if(!username){
		result = {
			status : 400,
			errorQuery : ref,
			errorMsg : 'UserName cannot be null'
		};
		return result;
	}else{
		//check length
		//userName length : [4,21)
		if(username.length < 4 || username.length >= 21){
			result = {
				status : 400,
				errorQuery : ref,
				errorMsg : 'Nickname is between 4 and 21 characters'
			};
			return result;
		}
	}
	
}

async function phoneCheck(phone){
	let result = {};
	const ref = 'phone';
	if(!phone){
		result = {
			status : 400,
			errorQuery : ref,
			errorMsg : 'Phone number cannot be null'
		};
		return result;
	}else{
		const reg = /^1[3456789]\d{9}$/;
		if(!reg.test(phone)){
			result = {
				status : 400,
				errorQuery : ref,
				errorMsg : 'Invalid phone number'
			}
			return result;
		}
		
		const isQunique = await new Promise((resolve, reject) =>{
			userDao.phoneUnique(phone, function(data){
				console.log('phone reusslt out ')
				resolve(data.length ? true : false);
			}); 
		})
		console.log('isQunie :' ,isQunique);
		if(isQunique){
			result = {
				status : 400,
				errorQuery : ref,
				errorMsg : 'Phone number is already in use'
			}
			return result;
		}
		
	}
}

function passwordCheck(password){
	let result = {};
	const ref = 'password';
	if(!password){
		result = {
			status : 400,
			errorQuery : ref,
			errorMsg : 'Password cannot be null'
		};
		return result;
	}else{
		
		if(password.length < 6 || password.length >= 16){
			result = {
				status : 400,
				errorQuery : ref,
				errorMsg : 'Password is too long or too short'
			};
			return result;
		}
	}
}

module.exports = {
	emailCheck,
	usernameCheck,
	passwordCheck,
	phoneCheck
}