<template>
	<div class="swiper-box">
		<div class="swiper-container">
		  <div class="swiper-wrapper">
		    <div class="swiper-slide"><img src="./img/img1.jpg" alt=""></div>
		    <div class="swiper-slide"><img src="./img/img2.jpg" alt=""></div>
		    <div class="swiper-slide"><img src="./img/img3.jpg" alt=""></div>
		    <div class="swiper-slide"><img src="./img/img4.jpg" alt=""></div>
		  </div>
		  <div class="swiper-pagination">
		  </div><!--分页器。如果放置在swiper-container外面，需要自定义样式。-->
		</div>
	</div>
</template>

<script>
	import Swiper from "D:/vuexiangmu/dmy/node_modules/swiper/js/swiper.js"
	export default{
		name:"",
		data(){/* 数据存放 */
			return{
				
			}
		},
		mounted() {  /* 开始时自动执行*/
			new Swiper('.swiper-container', {
					loop:true,//开启轮播
					autoplay: {//轮播时间
						delay:1000,
						disableOnInteraction:false,
					},
					pagination: {//分页器
						el: '.swiper-pagination',
					},
				})
		},
		methods:{  /* 方法区*/
			
		},
		components:{/* 组件区 */
			
		},
	}
</script>

<style>
	.swiper-box{
		width: 100%;
		height: 100%;
	}
	.swiper-container{
		width: 100%;
		height: 500px;
	}
	.swiper-box img{
		width: 100%;
		height: 100%;
	}
	.swiper-pagination-bullet{
	  width: 50px;
	  height: 8px;
	  display: inline-block;
	  border-radius: 10px;
	  background: #000;
	  opacity: 0.6;
	}
	.swiper-pagination-bullet-active{
		background-color: red;
	}
	@import "D:/vuexiangmu/dmy/node_modules/swiper/css/swiper.css";
</style>
