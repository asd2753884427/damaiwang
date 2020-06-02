<template>
	<div class="res-box">
		<Header>
			<span slot="textw">账号注册</span>
		</Header>
		<div class="res-kuang">
			<div class="res-res-box">
				<Form ref="formCustom" :model="formCustom" :rules="ruleInline" inline>
					<FormItem prop="user" style="width: 600px">
						<Input type="text" v-model="formCustom.user" placeholder="请输入手机号">
						<Icon type="md-contact" size="20" slot="prepend"></Icon>
						</Input>
					</FormItem>
					<FormItem prop="password" style="width: 600px">
						<Input type="password" v-model="formCustom.password" placeholder="请输入密码">
						<Icon type="md-lock" size="20" slot="prepend"></Icon>
						</Input>
					</FormItem>
					<FormItem prop="passwdCheck" style="width: 600px">
						<Input type="password" v-model="formCustom.passwdCheck" placeholder="请再次输入密码">
						<Icon type="md-lock" size="20" slot="prepend"></Icon>
						</Input>
					</FormItem>
					<FormItem prop="yanzhengma" style="width: 400px">
						<Input type="text" v-model="formCustom.yanzhengma" placeholder="请输入验证码">
						<Icon type="md-text" size="20" slot="prepend"></Icon>
						</Input>
					</FormItem>
					<FormItem style="width: 100px">
						<Button>获取验证码</Button>
						</Input>
					</FormItem>	
					<FormItem style="width: 600px">
						<Button type="primary" style="width: 600px">Signin</Button>
					</FormItem>
				</Form>
			</div>
		</div>
	</div>
</template>

<script>
	import Header from '@/components/loginResheader'
	export default {
		data() {
			const validatePass = (rule, value, callback) => {
				if (value === '') {
					callback(new Error('请输入您的密码'));
				} else {
					if (this.formCustom.passwdCheck !== '') {
						// 对第二个密码框单独验证
						this.$refs.formCustom.validateField('passwdCheck');
					}
					callback();
				}
			};
			const validatePassCheck = (rule, value, callback) => {
				if (value === '') {
					callback(new Error('请重新输入密码'));
				} else if (value !== this.formCustom.password) {
					callback(new Error('两个输入密码不匹配！'));
				} else {
					callback();
				}
			};
			return {
				formCustom: {
					user: '',
					password: '',
					passwdCheck: '',
					yanzhengma:''
				},
				ruleInline: {
					user: [{
						required: true,
						message: '请输入手机号',
						trigger: 'blur'
					}],
					password: [{
						validator: validatePass,
						trigger: 'blur'
					}],
					passwdCheck: [{
						validator: validatePassCheck,
						trigger: 'blur'
					}],
					yanzhengma: [{
						required: true,
						message: '请输入验证码',
						trigger: 'blur'
					}],
				}
			}
		},
		methods: {
			
		},
		components: {
			Header
		}
	}
</script>

<style>
	.res-box {
		width: 100%;
		height: 100%;
		background-color: #f5f5f5;
	}

	.res-kuang {
		width: 1000px;
		height: 450px;
		margin: 90px auto;
		background-color: #FFFFFF;
		position: relative;
	}

	.res-res-box {
		width: 600px;
		height: 300px;
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
	}
</style>
