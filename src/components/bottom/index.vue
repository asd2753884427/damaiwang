<template>
	<div class="bottom-box">
		<div class="bottom-top">
			<dl v-for="(ar,index) in topData.top" :key="index">
				<dt >{{ar.biaoti}}</dt>
				<Dl v-for="(ar2,xiabiao) in ar.neitou" :key="xiabiao">
					<span slot="weizi">{{ar2}}</span>
				</Dl>
				<img :src="ar.tupian" alt="" slot="tp">
			</dl>
		</div>
		<div class="bottom-bottom">
			<ul class="weizi">
				<li v-for="(ar,index) in topData.bottom" :key="index">{{ar}}</li>
			</ul>
			<ul class="bottom-img">
				<li><img src="./img/lj1.png" alt=""></li>
				<li><img src="./img/lj2.png" alt=""></li>
				<li><img src="./img/lj3.png" alt=""></li>
				<li><img src="./img/lj4.png" alt=""></li>
				<li><img src="./img/lj5.png" alt=""></li>
				<li><img src="./img/lj6.png" alt=""></li>
			</ul>
		</div>
	</div>
</template>

<script>
	import Dl from '../bottom-zu/index.vue'
	export default{
		components:{
			Dl,
		},
		data(){
			return{
				topData : ""
			}
		},
		mounted() {
			this.shujuqingqiu()
		},
		methods:{
			shujuqingqiu(){
				this.$http('http://localhost:8080/bottom.json').then(res=>{
					this.topData=res.data
					console.log(res.data);
				})
			}
		}
	}
</script>

<style scoped="scoped">
	.bottom-box{
		width: 1512px;
		margin: 0 auto;
		padding: 50px 20px;
		background-color: #e6e6e6;
	}
	.bottom-top{
		padding: 0 0 10px 0;
		border-bottom: 3px solid #CD0200;
		display: flex;
		justify-content: space-between
	}
	.bottom-top dl dt{
		font-size: 18px;
		margin-bottom: 10px;
	}
	.bottom-top dl dd{
		font-size: 10px;
		margin-bottom: 5px;
	}
	.bottom-bottom{
		width: 100%;
		text-align: center;
		margin-top: 20px;
	}
	.bottom-bottom .weizi li{
		list-style: none;
		display: inline-block;
		margin-left: 20px;
		padding-left: 20px;
		border-left: 1px solid #000000;
	}
	.bottom-bottom .weizi li:first-child{
		border-left:none;
		margin-left: 0;
		padding-left: 0;
	}
	.bottom-img li{
		list-style: none;
		display: inline-block;
		margin-top: 30px;
		margin-left: 20px;
	}
	.bottom-bottom .bottom-img li:first-child{
		margin-left: 0;
	}
</style>
