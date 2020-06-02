<template>
	<div class="index-box">
		<Headerz></Headerz>

		<!-- 导航部分 商品分类 广告图片的轮播 -->
		<div class="content-box">
				<Layout class="content-box-kuang">
					<Sider hide-trigger>
						<div class="content-box-kuang-text">全部商品分类</div>
						<div class="content-box-kuang-page"><GoodsMenu></GoodsMenu></div>
					</Sider>
					<Layout>
						<Header class="header-shouye">
							<headerNav></headerNav>
						</Header>
						<Content>
							<Rotation></Rotation>
						</Content>
					</Layout>
				</Layout>
		</div>
		
		<!-- tabs 今天推荐  即将开售 -->
		<div class="tabs-box">
			<Recommend></Recommend>
		</div>
		
		<!-- 楼层分类 -->
		
		<div class="seafloor-box">
			<div class="seafloor-kuang" v-for="(ar,index) in Seafloor" :key="index">
				<!-- 楼层的主要区 -->
				<div class="seafloor-left">
					<!-- 楼层的标题 -->
					<h2 class="seafloor-left-title"><span>{{ar.louceng}}</span>{{ar.title}}</h2>
					<!-- 楼层的大介绍区 -->
					<div class="seafloor-left-main" v-for="(ar1,index) in ar.main" :key="index">
						<img :src="ar1.images" alt="" class="seafloor-left-main-imgs">
						<div class="seafloor-left-main-introduce">
							<p>{{ar1.title}}</p>
							<p>{{ar1.jiage}}元</p>
						</div>
					</div>
					<!-- 楼层的右边小介绍区 -->
					<div class="seafloor-left-mainright">
						<div class="seafloor-left-mainright-kuang" v-for="(ar2,index) in ar.mainright" :key="index">
							<div class="seafloor-left-mainright-kuang-imgs"><img :src="ar2.images" alt=""></div>
							<div class="seafloor-left-mainright-kuang-introduce">
								<h3>{{ar2.title}}</h3>
								<p>{{ar2.riqi}}</p>
								<p>{{ar2.dizhi}}</p>
								<p>${{ar2.jiage}}起</p>
							</div>
						</div>
					</div>
				</div>
				<!-- 楼层的热门排行榜 -->
				<div class="seafloor-right" v-for="(ar3,index) in ar.mainslide" :key="index">
					<p class="seafloor-right-gengduo">{{ar3.gengduo}}</p>
					<p class="seafloor-right-title">{{ar3.title}}</p>
					<ul>
						<li class="seafloor-right-li" v-for="(ar4,index) in ar3.list" :key="index">
						<span class="seafloor-right-li-id">{{ar4.index}}</span>
						{{ar4.text}}
						</li>
					</ul>
				</div>
			</div>
		</div>
		
		<Bottom></Bottom>
	</div>
</template>

<script>
	import Headerz from '@/components/header'
	import Bottom from '@/components/bottom'
	import GoodsMenu from '@/components/goodsMenu'
	import headerNav from '@/components/headerNav'
	import Rotation from '@/components/Rotation'
	import Recommend from '@/components/Recommend'
	export default {
		components: {
			Headerz,
			Bottom,
			GoodsMenu,
			headerNav,
			Rotation,
			Recommend
		},
		data(){
			return{
				Seafloor:""
			}
		},
		mounted() {
			this.$http('http://localhost:8080/api_index_main.json').then(res=>{
				console.log(res)
				this.Seafloor=res.data.data
			})
		}
	}
</script>

<style>
	.index-box {
		width: 100%;
		background-color: #e6e6e6;
	}
	.content-box{
		width: 1512px;
		margin: 0 auto;
	}
	/* 头部导航 */
	.content-box-kuang-text{
		height: 65px;
		background-color: #000000;
		color: #FFFFFF;
		text-align: center;
		line-height: 65px;
		font-size: 16px;
	}
	
	.content-box-kuang-page{
		background-color: #FF3C1B;
		height: 500px;
	}
	
	.header-shouye{
		padding: 0;
	}
	.header-shouye ul li{
		list-style: none;
		display: inline-block;
		color: #000;
		margin-right: 50px;
		font-size: 18px;
	}
	.header-shouye .active{
		background-color: #0062CC;
	}
	
	/* tabs */
	.tabs-box{
		width: 1512px;
		margin: 60px auto;
		background-color: #FFFFFF;
		padding: 10px 0 60px 40px;
	}
	
	/* 楼层分类 */
	.seafloor-box{
		width: 1512px;
		margin: 0 auto;
	}
	.seafloor-kuang{
		width: 100%;
		height: 500px;
		margin: 30px 0;
	}
	.seafloor-kuang:after{
	content:".";
	clear:both;
	display:block;
	height:0;
	overflow:hidden;
	visibility:hidden;
	}
	.seafloor-kuang{
	zoom:1
	}
	.seafloor-left{
		float: left;
		width: 1150px;
		height: 500px;
		background-color: #FFFFFF;
		padding: 30px 20px;
		box-sizing: border-box;
	}
	.seafloor-left-title{
		height: 30px;
		margin-bottom: 10px;
	}
	.seafloor-left-title span{
		margin-right: 5px;
		color: #FF3C1B;
	}
	.seafloor-left-main{
		width: 250px;
		height: 400px;
		position: relative;
		float: left;
	}
	.seafloor-left-main-imgs{
		width: 100%;
		height: 100%;
		position: absolute;
	}
	.seafloor-left-main-introduce{
		width: 100%;
		height: 150px;
		position: absolute;
		background-color: rgb(166, 20, 21,0.8);
		left: 0;
		bottom: 0;
		padding: 30px 50px 20px 30px;
		box-sizing: border-box;
		color: #FFF;
	}
	.seafloor-left-main-introduce p:nth-of-type(1){
		margin-bottom: 15px;
	}
	.seafloor-left-mainright{
		float: left;
		width: 820px;
		margin-left: 30px;
		height: 400px;
	}
	.seafloor-left-mainright:after{
	content:".";
	clear:both;
	display:block;
	height:0;
	overflow:hidden;
	visibility:hidden;
	}
	.seafloor-left-mainright{
	zoom:1
	}
	.seafloor-left-mainright-kuang{
		float: left;
		display: flex;
		width: 400px;
		height: 150px;
		margin-right: 10px;
		margin-bottom: 100px;
	}
	.seafloor-left-mainright>.seafloor-left-mainright-kuang:nth-of-type(3){
		margin-bottom: 0px;
	}
	.seafloor-left-mainright>.seafloor-left-mainright-kuang:nth-of-type(4){
		margin-bottom: 0px;
	}
	.seafloor-left-mainright-kuang-imgs{
		vertical-align: top;
		width: 100px;
		height: 100%;
	}
	.seafloor-left-mainright-kuang-imgs img{
		width: 100px;
		height: 100%;
	}
	.seafloor-left-mainright-kuang-introduce{
		margin-left: 10px;
		width: 290px;
		vertical-align: top;
	}
	.seafloor-left-mainright-kuang-introduce h3{
		margin-bottom: 30px;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	.seafloor-left-mainright-kuang-introduce p{
		margin-bottom: 10px;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	
	.seafloor-right{
		float: right;
		width: 320px;
		height: 500px;
		background-color: #FFF;
		padding: 20px 40px;
		box-sizing: border-box;
	}
	.seafloor-right-gengduo{
		text-align: right;
	}
	.seafloor-right-title{
		margin-bottom: 20px;
	}
	.seafloor-right-li{
		list-style: none;
		line-height: 30px;
	}
	.seafloor-right-li-id{
		display: inline-block;
		width: 20px;
		height: 20px;
		background-color: #808080;
		text-align: center;
		line-height: 20px;
		margin-right: 10px;
	}
	.seafloor-right .seafloor-right-li:nth-child(-n+3) .seafloor-right-li-id{
		background-color: #FF3C1B;
	}
</style>
