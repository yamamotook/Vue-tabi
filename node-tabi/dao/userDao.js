const dbUtil = require('./dbUtil.js');


function emailUnique(email, success){
	const query = 'select userId from user where email = ?';
	const connection = dbUtil.createConnection();
	connection.connect();
	connection.query(query, email, function(error, queryResult){
		if(error == null){
			success(queryResult);
		}else{
			throw new Error(error);
		}
	});
	connection.end();

}

function phoneUnique(phone, success){
	const query = 'select userId from user where phone = ?';
	const connection = dbUtil.createConnection();
	connection.connect();
	connection.query(query, phone, function(error, queryResult){
		if(error == null){
			success(queryResult);
		}else{
			throw new Error(error);
		}
	});
	connection.end();

}

function userRegist(email, userName, password, phone, success, fail){
	const query =  'insert into user (userNickName, password, email, phone) values (?,?,?,?)';
	const connection = dbUtil.createConnection();
	connection.connect();
	const params = [userName,password,email,phone];
	connection.query(query, params, function(error, queryResult){
		if(error == null){
			success(queryResult);
		}else{
			fail();
			throw new Error(error);
		}
	});
	connection.end();

}

function queryUserByEmail(email, success, fail){
	const query =  'select * from user where email = ?';
	const connection = dbUtil.createConnection();
	connection.connect();
	connection.query(query, email, function(error, queryResult){
		if(error == null){
			success(queryResult);
		}else{
			fail();
			throw new Error(error);
		}
		connection.end();
	});
	

}

function changeUserHeadPic(userId, path, success){
	const sql = 'UPDATE `user` SET userHeadPic =  ? WHERE userId = ?';
	const connection = dbUtil.createConnection();
	connection.connect();
	connection.query(sql, [path, userId ], function(error, queryResult){
		if(error == null){
			console.log(queryResult);
			success(queryResult);
		}else{
			fail();
			throw new Error(error);
		}
	});
	connection.end();
}

function updateUserInfo(q,success,fail){
	const sql = 'UPDATE `user` SET userNickName = ?, sex = ?, liveCity= ?, aboutMe = ?, birthday = ? WHERE userId = ?';
	const connection = dbUtil.createConnection();
	connection.connect();
	connection.query(sql, [q.userName, q.sex, q.liveCity, q.aboutMe, q.birthday,q.userId ], function(error, queryResult){
		if(error == null){
			console.log(queryResult);
			success(queryResult);
		}else{
			fail();
			throw new Error(error);
		}
		connection.end();
	});
}


function getUserInfoById(q, success){
	const query =  'SELECT userId, userNickName, userHeadPic, sex, liveCity, aboutMe, birthday from user where userId = ?';
	const connection = dbUtil.createConnection();
	connection.connect();
	connection.query(query, q.userId, function(error, queryResult){
		if(error == null){
			success(queryResult);
		}else{
			fail();
			throw new Error(error);
		}
		connection.end();
	});
}

function updatePassword(pwd,userId, success){
	const sql = 'UPDATE `user` SET password =  ? WHERE userId = ?';
	const connection = dbUtil.createConnection();
	connection.connect();
	connection.query(sql, [pwd, userId], function(error, queryResult){
		if(error == null){
			success(queryResult);
		}else{
			fail();
			throw new Error(error);
		}
		connection.end();
	});
}

module.exports = {
	emailUnique,
	userRegist,
	phoneUnique,
	queryUserByEmail,
	changeUserHeadPic,
	updateUserInfo,
	getUserInfoById,
	updatePassword
}