<template>
	<div id="headersearch">
		<div id="container">
					<a href="" class="t-logo">
						<img src="./img/login.png" alt="" width="167" height="60">
					</a>
					<div class="t-city">
						<Dropdown trigger="click" style="margin-left: 20px">
							<a href="javascript:void(0)">
								北京
								<Icon type="ios-arrow-down"></Icon>
							</a>
							<DropdownMenu slot="list">
								<div class="t-infos">
									<dl>
										<dt>华北地区</dt>
										<dd>
											<ul>
												<li><a href="">北京</a></li>
												<li><a href="">邯郸</a></li>
												<li><a href="">保定</a></li>
												<li><a href="">石家庄</a></li>
											</ul>
										</dd>
										<dt>华北2地区</dt>
										<dd>
											<ul>
												<li><a href="">北京2</a></li>
												<li><a href="">邯郸2</a></li>
												<li><a href="">保定2</a></li>
												<li><a href="">石家庄2</a></li>
											</ul>
										</dd>
									</dl>
								</div>
							</DropdownMenu>
						</Dropdown>
					</div>
					<div class="t-search">
						<div class="search-main">
							<input type="text" placeholder="请输入" class="search-text">
							<button class="search-btn" type="button">搜索</button>
						</div>
					</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {

			}
		}
	}
</script>

<style scoped="scoped">
	#container{
		width: 1512px;
		margin: 0 auto;
		height: 70px;
		overflow: hidden;
	}
	.t-logo{
		display: inline-block;
		margin: 10px;
		float: left;
		width: 167px;
		height: 60px;
	}
	.t-city{
		width: 400px;
		/* background-color: coral; */
	}
	.t-city dl{
		border-bottom: 1px solid #E8E8E8;
		line-height: 40px;
	}
	.t-city dl dt{
		font-size: 18px;
		color: #333;
		width: 85px;
		text-align: right;
	}
	.t-city dl dt dd{
		float: left;
	}
	ul li{
		float: left;
		width: 80px;
		list-style: none;
	}
	
	.t-search{
		margin: 0 auto;
		width: 800px;
	}
	.search-main{
		height: 40px;
		overflow: hidden;
	}
	.search-text{
		border: 3px red solid;
		width: 400px;
		height: 30px;
		float: left;
		padding: 15px 10px;
		line-height: 30px;
		outline: 0;
		color: #fff;
	}
	.search-btn{
		width: 100px;
		height: 36px;
		float: left;
		line-height: 30px;
		text-align: center;
		border: none;
		font-size: 18px;
		color: white;
		background: #FF3C1B;
	}
</style>
