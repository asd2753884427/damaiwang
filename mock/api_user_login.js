import Mock from 'mockjs'

const Random = Mock.Random

Mock.mock('/api/user','post',(option) =>{
	
	let success=0;
	
	let userName="189181818";
	let pwd = '123456';
	
	let { user,password } = JSON.parse(option.body);
	
	console.log(user);
	console.log(password);
	
	if(user== userName && password == pwd){
		success = 1;
	}
	
	return success;
})