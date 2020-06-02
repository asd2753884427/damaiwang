<template>
	<div class="header-loginres-box">
		<div class="header-loginres-kuang">
			<div class="header-loginres-img">
				<img src="./img/login.png" alt="">
			</div>
			<div class="header-loginres-text">
				<slot name="textw"></slot>
			</div>
		</div>
	</div>
</template>

<script>
</script>

<style scoped="scoped">
	.header-loginres-box{
		width: 100%;
		height: 90px;
		background-color: #FFFFFF;
	}
	.header-loginres-kuang{
		width: 1000px;
		height: 90px;
		margin: 0 auto;
		position: relative;
	}
	.header-loginres-img{
		width: 150px;
		height: 40px;
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
	}
	.header-loginres-img img{
		width: 100%;
		height: 100%;
	}
	.header-loginres-text{
		font-size: 18px;
		width: 300px;
		height: 40px;
		border-left: 2px solid #dadada;
		line-height: 40px;
		position: absolute;
		left: 200px;
		top: 50%;
		transform: translateY(-50%);
		padding-left: 20px;
	}
</style>
