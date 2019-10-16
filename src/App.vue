<template>
  <div id="app">
		<router-view v-if="logined"/>
		<div v-else>
			<router-view/>
			<div id="nav">
			  <router-link to="/home">首页</router-link>
			  <router-link to="/attention">关注</router-link>
				<router-link to="/diamonds">简书钻</router-link>
				<router-link to="/message">消息</router-link>
				<router-link to="/my">我的</router-link>
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
			//this.path = this.$route.path  //this.path = 当前页面路由
			this.showLogin(this.$route.path)
		},
		watch: { //监测路由变化
			$route(to, from) {
				//this.path = to.path
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
		text-align: center;
		color: #2c3e50;
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
		a {
			font-weight: bold;
			color: #2c3e50;
			&.router-link-exact-active {
				color: #42b983;
			}
		}
	}
</style>
