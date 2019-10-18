<template>
  <div class="login">
    <h3>手机验证码登录</h3>
		<van-cell-group>
		  <van-field
		    v-model="phone"
		    placeholder="请输入手机号"/>
		  <van-field
				v-model="sms"
				center
				clearable
				placeholder="请输入验证码">
				<van-button slot="button" size="small">获取验证码</van-button>
			</van-field>
		</van-cell-group>
		<div class="btn-width">
			<van-button type="warning" round @click="toHome">登录</van-button>
		</div>
		<div class="tip">
			<span>账号密码登录</span>
			<a>|</a>
			<span>登录遇到问题</span>
		</div>
		<div class="other-login">
			<div class="title">
				&nbsp;&nbsp;&nbsp;&nbsp;社交账号登录&nbsp;&nbsp;&nbsp;&nbsp;
			</div>
		  <div class="btns">
				<a href=""><i class="iconfont iconweibo1"></i></a>
				<a href=""><i class="iconfont iconweixin1"></i></a>
				<a href=""><i class="iconfont iconQQ"></i></a>
			</div>
		</div>
		<div class="explain">未注册的手机登录时将自动注册，且代表您已经同意用户协议 和 隐私政策 。</div>
  </div>
</template>

<script>
import { CellGroup, Field, Button } from 'vant'

export default {
  name: 'login',
	components: {
		[CellGroup.name]: CellGroup,
		[Field.name]: Field,
		[Button.name]: Button
	},
	data() {
		return {
			phone: '',
			sms: ''
		}
	},
	methods: {
		toHome() {
			this.$router.push({
				path: '/home'
			})
		}
	}
}
</script>

<style scoped lang="scss">
	.login {
		padding: 10% 8% 0;
		position: absolute;
		h3 {
			text-align: center;
			font-weight: normal;
			margin-bottom: 1.875rem;
		}
		.btn-width {
			width: 100%;
			margin: 30px 0;
			button {
				width: 100%;
			}
		}
		.tip {
			color: #2d54ab;
			font-size: 0.875rem;
			text-align: center;
			a {
				color: #999;
				padding: 0 10px;
			}
		}
		.other-login {
			margin: 80px 0 30px;
			.title {
				font-size: 12px;
				color: #969696;
				display: flex;
				justify-content: center;
				align-items: center;
				padding-top: 10px;
				padding-bottom: 16px;
				&:before,&:after {
					background: #ddd;
					content: "";
					height: 1px;
					width: 20%;
				}
			}
			.btns {
				text-align: center;
			  a {
			    i {
						font-size: 1.75rem;
						margin: 0 15px;
						&.iconweibo1 {
							color: #e05244;
						}
						&.iconweixin1 {
							color: #00bb29;
						}
						&.iconQQ {
							color: #498ad5;
						}
					}
				}
			}
		}
		.explain {
			text-align: center;
			font-size: 0.75rem;
			color: #999;
			padding: 0 5%;
		}
	}
</style>
