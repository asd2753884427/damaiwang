<template>
	<div>
		<Tabs value="name1" :animated="false">
			<TabPane v-for="(ar,index) in RecommendData" :key="index" :label="ar.tabs" :name="ar.name">
				<div class="tabs-kuang" v-for="(ar1,index) in ar.main" :key="index">
					<div class="tabs-kuang-img">
						<img :src="ar1.img" alt="">
					</div>
					<p class="tabs-kuang-title">
						{{ar1.text}}
					</p>
					<p class="tabs-kuang-price">
						票价:<span>＄{{ar1.piaojia}}</span>
					</p>
				</div>
			</TabPane>
		</Tabs>
	</div>
</template>

<script>
	export default {
		name: "",
		data() { /* 数据存放 */
			return {
				RecommendData:""
			}
		},
		mounted() { /* 开始时自动执行*/
			this.$http("http://localhost:8080/api_index_tabs.json").then(res=>{
				console.log(res.data.data);
				this.RecommendData=res.data.data;
			})
		},
		methods: { /* 方法区*/

		},
		components: { /* 组件区 */

		},
	}
</script>

<style>
	.tabs-kuang{
		width: 200px;
		height: 350px;
		margin-right: 50px;
		float: left;
	}
	.tabs-box .tabs-kuang:last-child{
		margin-right: 0px;
	}
	.tabs-kuang-img{
		width: 100%;
		height: 250px;
	}
	.tabs-kuang-img img{
		width: 100%;
		height: 100%;
	}
	.tabs-kuang-title{
		width: 90%;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		font-size: 16px;
		margin: 15px 0;
	}
	.tabs-kuang-price{
		font-size: 16px;
	}
	.tabs-kuang-price span{
		font-weight: bold;
	}
	
	.ivu-tabs-nav .ivu-tabs-tab-active{
		color: #FFB9AE;
	}
	
	.ivu-tabs-ink-bar{
		background-color: #FF3C1B;
	}
	
	.ivu-tabs-nav .ivu-tabs-tab:hover{
		color: #FFB9AE;
	}
</style>
