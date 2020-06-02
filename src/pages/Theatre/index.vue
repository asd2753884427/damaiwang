<template>
	<div class="theatre-box">
		<Headerz></Headerz>
		<div class="content-box">
				<Layout class="content-box-kuang">
					<Header class="header-shouye">
						<headerNav>
							<li slot="sy">
								<router-link @click.native="$router.go(0)" to="/">首页</router-link>
							</li>
						</headerNav>
					</Header>
					<Content>
						<Rotation></Rotation>
					</Content>
				</Layout>
		</div>
	</div>
</template>

<script>
	import Headerz from '@/components/header'
	import headerNav from '@/components/headerNav'
	import Rotation from '@/components/Rotation'
	export default{
		name:"",
		data(){/* 数据存放 */
			return{
				
			}
		},
		mounted() {  /* 开始时自动执行*/
			
		},
		methods:{  /* 方法区*/
			
		},
		components:{/* 组件区 */
			Headerz,
			headerNav,
			Rotation
		},
	}
</script>

<style>
	.content-box{
		width: 1512px;
		margin: 0 auto;
	}
</style>
