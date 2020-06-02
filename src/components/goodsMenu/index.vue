<template>
	<div id="goodsList">
		<ul>
			<li v-for="(ar,index) in slideMenu" :key="index" @mouseenter="fn(index)" @mouseleave="fn1(index)">
				<router-link to="/">
					<img :src="iconList[index].imgSrc" alt="">
					<span>{{ ar }}</span>
				</router-link>
			</li>
		</ul>
		<div class="classify-hide" v-if="onShow">
			{{shuzi}}
		</div>
	</div>
</template>

<script>
	import pic1 from "./img/yanchanghui.png"
	import pic2 from "./img/yinyuehui.png"
	import pic3 from "./img/hjgj.png"
	import pic4 from "./img/wdbl.png"
	import pic5 from "./img/ktdm.png"
	import pic6 from "./img/qyzt.png"
	import pic7 from "./img/tybs.png"
	export default{
		name:"",
		data(){/* 数据存放 */
			return{
				slideMenu:["演唱会","音乐会","歌剧喜剧","杂谈","体育比赛","儿童亲子","舞蹈芭蕾"],
				iconList:[
					{imgSrc:pic1},
					{imgSrc:pic2},
					{imgSrc:pic3},
					{imgSrc:pic4},
					{imgSrc:pic5},
					{imgSrc:pic6},
					{imgSrc:pic7}
				],
				onShow:false,
				shuzi:""
			}
		},
		mounted() {  /* 开始时自动执行*/
			
		},
		methods:{  /* 方法区*/
			fn(index){
				this.onShow=true;
				this.shuzi=index;
			},
			fn1(index){
				this.onShow=false;
				this.shuzi=index;
			}
		},
		components:{/* 组件区 */
			
		},
	}
</script>

<style scoped="scoped">
	ul{
		list-style: none;
	}
	#goodsList>ul>li{
		height: 50px;
		line-height: 50px;
	}
	#goodsList>ul>li>a{
		width: 200px;
		height: 50px;
		line-height: 50px;
		display: inline-block;
		color: #FFFFFF;
		box-sizing: border-box;
		background: url("./img/jiantou.png") 170px center no-repeat;
	}
	#goodsList>ul>li>a:hover{
		background-color: #DE290A;
	}
	#goodsList>ul>li>a>img{
		width: 20px;
		height: 20px;
		vertical-align: middle;
		margin-left: 30px;
	}
	#goodsList>ul>li>a>span{
		vertical-align: middle;
		margin-left: 15px;
	}
	
	.classify-hide{
		width: 900px;
		height: 350px;
		position: absolute;
		left: 200px;
		top: 65px;
		background-color: rgb(222,226,269,0.6);
		z-index: 99;
	}
</style>
