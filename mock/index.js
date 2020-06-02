const express  = require('express');

//数据流
const fs = require('fs');

const path = require('path')

//方法
const app = express()

//首页
const api_user_login = path.join(__dirname,"api_user_login.js")
app.get('/api_user_login',function(req,res){
	const jieshou = fs.readFileSync(api_user_login)
	const resjs = JSON.parse(jieshou)
	res.send(resjs)
})

app.listen(3001,()=>{
	console.log("3001端口可以访问了")
})