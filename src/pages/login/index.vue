<template>
	<div class="login-box">
		<Header>
			<span slot="textw">欢迎━(*｀∀´*)ノ亻!登录</span>
		</Header>
		<div class="login-content">
			<div class="login-content-left">
				<img src="./img/bz.jpg" alt="">
			</div>
			<div class="login-content-right">
				<Tabs type="card">
					<TabPane label="账号登录" class="login-content-right-left">
						<Form ref="formInline" :model="formInline" :rules="ruleInline" inline>
							<FormItem prop="user" style="width: 100%">
								<Input type="text" v-model="formInline.user" placeholder="请输入手机号码">
								<Icon type="ios-person-outline" slot="prepend"></Icon>
								</Input>
							</FormItem>
							<FormItem prop="password" style="width: 100%">
								<Input type="password" v-model="formInline.password" placeholder="请输入登录密码">
								<Icon type="ios-lock-outline" slot="prepend"></Icon>
								</Input>
							</FormItem>
							<FormItem style="width: 100%">
								<Button type="primary" style="width: 100%;background-color: #0000FF;">登录</Button>
							</FormItem>
							<FormItem>
								<CheckboxGroup v-model="formInline.checkbox">
									<Checkbox label="下次自动登录"></Checkbox>
								</CheckboxGroup>
							</FormItem>
							<span class="login-content-right-left-content">
								<router-link to="/wjmm" class="login-content-right-left-wjmm">忘记密码?</router-link>
								<router-link to="/res" class="login-content-right-left-ljzc">立即注册</router-link>
							</span>
							<p class="login-content-right-left-other">
								其他登录：
								<span class="login-content-right-left-other-wx">
									<svg t="1589594160662" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
									 p-id="7512" width="32" height="32">
										<path d="M1010.8 628c0-141.2-141.3-256.2-299.9-256.2-168 0-300.3 115.1-300.3 256.2 0 141.4 132.3 256.2 300.3 256.2 35.2 0 70.7-8.9 106-17.7l96.8 53-26.6-88.2c70.9-53.2 123.7-123.7 123.7-203.3zM618 588.8c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40c0 22-17.9 40-40 40z m194.3-0.3c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40z"
										 fill="#00C800" p-id="7513"></path>
										<path d="M366.3 106.9c-194.1 0-353.1 132.3-353.1 300.3 0 97 52.9 176.6 141.3 238.4l-35.3 106.2 123.4-61.9c44.2 8.7 79.6 17.7 123.7 17.7 11.1 0 22.1-0.5 33-1.4-6.9-23.6-10.9-48.3-10.9-74 0-154.3 132.5-279.5 300.2-279.5 11.5 0 22.8 0.8 34 2.1C692 212.6 539.9 106.9 366.3 106.9zM247.7 349.2c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48z m246.6 0c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48z"
										 fill="#00C800" p-id="7514"></path>
									</svg>
								</span>
							</p>
						</Form>
					</TabPane>
					<TabPane label="短信快捷登录" class="login-content-right-right">222222222</TabPane>
				</Tabs>
			</div>
		</div>
	</div>
</template>

<script>
	import Header from '@/components/loginResheader'
	export default {
		components: {
			Header
		},
		data() {
			return {
				tab0: true,
				tab1: true,
				tab2: true,
				formInline: {
					user: '',
					password: '',
					checkbox: [],
				},
				ruleInline: {
					user: [{
						required: true,
						message: '请输入手机号',
						trigger: 'blur'
					}],
					password: [{
							required: true,
							message: '请填写密码.',
							trigger: 'blur'
						},
						{
							type: 'string',
							min: 6,
							message: '密码长度不能小于6位',
							trigger: 'blur'
						}
					]
				}
			}
		},
		methods: {
			login() {
				this.$http.post('/api/user', this.formInline).then(res => {
					console.log(res.data);
				})
			}
		}
	}
</script>

<style scoped="scoped">
	.login-box {
		width: 100%;
		height: 100%;
		background-color: #f5f5f5;
	}

	.login-content {
		width: 1000px;
		height: 450px;
		margin: 90px auto;
		position: relative;
		font-size: 0px;
	}

	.login-content-left {
		width: 485px;
		height: 450px;
		display: inline-block;
	}

	.login-content-left img {
		width: 100%;
		height: 100%;
		border: none;
	}

	.login-content-right {
		margin-left: 30px;
		width: 485px;
		height: 450px;
		display: inline-block;
		vertical-align: top;
		font-size: 20px;
		background-color: #FFF;
	}

	.login-content-right-left {
		padding: 10px 20px 0 20px;
		box-sizing: border-box;
	}

	.login-content-right-left-content {
		float: right;
	}

	.login-content-right-left-wjmm {
		color: #000000;
		font-size: 15px;
	}

	.login-content-right-left-ljzc {
		color: #FF7F00;
		font-size: 15px;
		margin-left: 5px;
	}

	.login-content-right-left-other {
		font-size: 15px;
	}
	.login-content-right-left-other-wx{
		width: 30px;
		height: 30px;
		display: inline-block;
		vertical-align: bottom;
	}
</style>
