<template>
	<ul>
		<li v-for="(ar,index) in navData" :key="index" @click="reds(index)" :class="{active:true}">{{ar.name}}</li>
	</ul>
</template>

<script>
	export default{
		name:"",
		data(){/* 数据存放 */
			return{
				navData:[
					{key:0,name:"首页",to:"/",flag:true},
					{key:1,name:"喜剧",to:"/theatre",flag:false},
					{key:2,name:"体育",to:"/tiyu",flag:false},
					{key:3,name:"亲子",to:"/qinzi",flag:false},
					{key:4,name:"舞蹈古典",to:"/wudaogudian",flag:false},
					{key:5,name:"摇滚",to:"/yaogun",flag:false}
				],
			}
		},
		mounted() {  /* 开始时自动执行*/
			
		},
		methods:{  /* 方法区*/
			
		},
		components:{/* 组件区 */
			
		},
	}
</script>

<style>
	.ivu-layout-header{
		padding: 0 !important;
	}
	.header-shouye{
		padding: 0;
	}
	.header-shouye ul li{
		width: 100px;
		height: 64px;
		list-style: none;
		display: inline-block;
		color: #000;
		font-size: 18px;
		text-align: center;
	}
	.active{
		color: #FFFFFF;
		background-color: #FF3C1B;
	}
</style>
