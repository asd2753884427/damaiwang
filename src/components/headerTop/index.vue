<template>
	<div class="page">
		<div class="page-top">
			<div class="content-top">
				<Row>
					<Col span="8">
					<div class="t-info fl">
					<span>
						HI,欢迎来到大觅网
					</span>
					[
					<router-link to="/login" class="t-login">登录</router-link>
					<router-link to="/register" class="t-register">注册</router-link>
					]
					</div>
					<!-- 下拉菜单 -->
					<Dropdown trigger="click" style="margin-left: 15px">
						<a href="javascript:void(0)" style="color: black;">
							我的大觅
							<Icon type="ios-arrow-down"></Icon>
						</a>
						<DropdownMenu slot="list">
							<DropdownItem>
								<router-link to="/personInfo">个人信息</router-link>
							</DropdownItem>
							<DropdownItem>
								<router-link to="/orderList">订单管理</router-link>
							</DropdownItem>
						</DropdownMenu>
					</Dropdown>
					</Col>
					<Col span="8" offset="8" class="headertop-right">
					<span>大觅网微信</span>
					<span>手机版</span>
					<Dropdown trigger="click" style="margin-left: 20px">
						<a href="javascript:void(0)" style="color: black;">
							客服服务
							<Icon type="ios-arrow-down"></Icon>
						</a>
						<DropdownMenu slot="list">
							<DropdownItem>驴打滚</DropdownItem>
							<DropdownItem>炸酱面</DropdownItem>
							<DropdownItem>豆汁儿</DropdownItem>
							<DropdownItem>冰糖葫芦</DropdownItem>
							<DropdownItem>北京烤鸭</DropdownItem>
						</DropdownMenu>
					</Dropdown>
					<Dropdown trigger="click" style="margin-left: 20px">
						<a href="javascript:void(0)" style="color: black;">
							网站导航
							<Icon type="ios-arrow-down"></Icon>
						</a>
						<DropdownMenu slot="list">
							<DropdownItem>驴打滚</DropdownItem>
							<DropdownItem>炸酱面</DropdownItem>
							<DropdownItem>豆汁儿</DropdownItem>
							<DropdownItem>冰糖葫芦</DropdownItem>
							<DropdownItem>北京烤鸭</DropdownItem>
						</DropdownMenu>
					</Dropdown>
					<span>English</span>
					</Col>
				</Row>
			</div>
		</div>
	</div>
</template>

<script>
	export default {

	}
</script>

<style scoped="scoped">
	.page{
		width: 100%;
		background-color: #F7F7F7;
		border-bottom: 1px #E8E8E8 solid;
		height: 40px;
		line-height: 40px;
	}
	.page-top{
		width: 1512px;
		margin: 0 auto;
	}
	.t-info{
		float: left;
	}
	.t-login{
		color: red;
		margin-right: 5px;
	}
	.headertop-right span{
		margin-left: 20px;
	}
</style>
