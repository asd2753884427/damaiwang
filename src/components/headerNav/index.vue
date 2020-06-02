<template>
	<ul>
		<slot name="sy"></slot>
		<li v-for="(ar,index) in navData" :key="index" @click="dianji(index)"><router-link @click.native="$router.go(0)" active-class="active" :to="ar.to">{{ar.name}}</router-link></li>
	</ul>
</template>

<script>
	export default{
		name:"",
		data(){/* 数据存放 */
			return{
				navData:[
					{name:"喜剧",to:"/theatre",buer:false},
					{name:"体育",to:"/tiyu",buer:false},
					{name:"亲子",to:"/qinzi",buer:false},
					{name:"舞蹈古典",to:"/wudaogudian",buer:false},
					{name:"摇滚",to:"/yaogun",buer:false}
				]
			}
		},
		mounted() {  /* 开始时自动执行*/
			
		},
		methods:{  /* 方法区*/
			dianji(index){
				for(let i=0;i<this.navData.length;i++){
					this.navData[i].buer=false
				}
				this.navData[index].buer=true
			}
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
	.header-shouye .active{
		color: #FFFFFF;
		background-color: #FF3C1B;
	}
	.header-shouye a{
		width: 100px;
		height: 64px;
		color: #000000;
		display: block;
	}
</style>
