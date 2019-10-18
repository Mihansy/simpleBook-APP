<template>
  <div id="app">
		<router-view v-if="logined"/>
		<div class="container" v-else>
			<router-view/>
			<div id="nav">
			  <router-link to="/home">
					<i class="iconfont iconshouye"></i>
					首页
				</router-link>
			  <router-link to="/attention">
					<i class="iconfont icontianchongxing-"></i>
					关注
				</router-link>
				<router-link to="/diamonds">
					<i class="iconfont icon31"></i>
					简书钻
				</router-link>
				<router-link to="/message">
					<i class="iconfont iconxiaoxi"></i>
					消息
				</router-link>
				<router-link to="/my">
					<i class="iconfont iconwode"></i>
					我的
				</router-link>
			</div>
		</div>
  </div>
</template>

<script>
	export default {
		data() {
			return {
				logined: true,
			}
		},
		methods: {
			showLogin(path) {
				if(path === '/') {
					this.logined = true
				}else {
					this.logined = false
				}
			}
		},
		mounted() {
			this.showLogin(this.$route.path)
		},
		watch: { //监测路由变化
			$route(to, from) {
				this.showLogin(to.path)
			}
		}
	}
</script>

<style lang="scss">
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		.container {
			padding-bottom: 50px;
			background-color: #f0f0f0;
		}
	}
	#nav {
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		z-index: 100;
		height: 50px;
		background-color: #fff;
		border-top: 1px solid #ddd;
		padding-left: 8%;
		padding-right: 8%;
		display: flex;
		justify-content: space-between;
		a {
			display: block;
			text-align: center;
			color: #969696;
			font-size: 0.75rem;
			&.router-link-exact-active {
				color: #ea6f5a;
			}
			i {
				display: block;
				font-size: 1.25rem;
				height: 24px;
				margin-top: 10%;
				line-height: 24px;
				&.icon31 {
					font-size: 1.75rem
				}
			}
		}
	}
</style>
