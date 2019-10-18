<template>
  <div class="message">
		<div class="top">消息
			<span class="rightfloat"><i class="iconfont iconicon_notice"></i></span>
		</div>
		<div class="middle">
			<a href="">
				<i class="iconfont icontubiaozhizuo-"></i>互动消息
			</a>
			<a href="">
				<i class="iconfont icon31"></i>简书钻
			</a>
			<a href="">
				<i class="iconfont iconicon_notice"></i>其他提醒
			</a>
		</div>
		<ul class="middle-list">
			<li>
				<span><i class="iconfont iconwenti"></i>如何免费获取简书钻？</span>
				<span>查看详情</span>
				<span><i class="iconfont iconguanbi"></i></span>
			</li>
			<li>#1 每天写文章，给自己的文章点赞。</li>
			<li>#2 找到优质好文章，给文章点赞。</li>
			<li>#3 分享自己的文章，让其他人点赞。</li>
		</ul>
		<div class="bottom">
			<div class="clearfix title">简信<span class="rightfloat">新简信</span></div>
			<ul>
				<li>
					<div class="left">
						<img class="" src="../assets/images/head.png" alt="">
					</div>
					<div class="right">
						<div>简书大学堂 <span class="rightfloat">10-18 11:32</span></div>
						<div>简信内容：总是有许许多多的人和事，在教大家怎么生活的更好彷佛</div>
					</div>
				</li>
				<li>
					<div class="left">
						<img class="" src="../assets/images/head.png" alt="">
					</div>
					<div class="right">
						<div>简书大学堂 <span class="rightfloat">10-18 11:32</span></div>
						<div>简信内容：总是有许许多多的人和事，在教大家怎么生活的更好彷佛</div>
					</div>
				</li>
				<li>
					<div class="left">
						<img class="" src="../assets/images/head.png" alt="">
					</div>
					<div class="right">
						<div>简书大学堂 <span class="rightfloat">10-18 11:32</span></div>
						<div>简信内容：总是有许许多多的人和事，在教大家怎么生活的更好彷佛</div>
					</div>
				</li>
				<li>
					<div class="left">
						<img class="" src="../assets/images/head.png" alt="">
					</div>
					<div class="right">
						<div>简书大学堂 <span class="rightfloat">10-18 11:32</span></div>
						<div>简信内容：总是有许许多多的人和事，在教大家怎么生活的更好彷佛</div>
					</div>
				</li>
				<li>
					<div class="left">
						<img class="" src="../assets/images/head.png" alt="">
					</div>
					<div class="right">
						<div>简书大学堂 <span class="rightfloat">10-18 11:32</span></div>
						<div>简信内容：总是有许许多多的人和事，在教大家怎么生活的更好彷佛</div>
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'message',
	}
</script>

<style lang="scss" scoped>
	.message {
		.top {
			line-height: 2;
			padding: 1% 3%;
			font-size: 1.125rem;
			border-bottom: 1px solid #f0f0f0;
			background-color: #fff;
			span {
				i {
					font-size: 1.25rem;
					color: #585757;
				}
			}
		}
		.middle {
			display: flex;
			justify-content: space-around;
			background-color: #fff;
			padding: 5% 0;
			border-bottom: 1px solid #f0f0f0;
			a {
				display: block;
				text-align: center;
				color: #595959;
				font-size: 0.875rem;
				i {
					display: block;
					height: 40px;
					line-height: 40px;
					font-size: 1.75rem;
					&.icontubiaozhizuo- {
						color: #00bb29;
					}
					&.icon31 {
						font-size: 2.2rem;
						color: #EA6F5A;
					}
					&.iconicon_notice {
						color: #ee0a24;
					}
				}
			}
		}
		.middle-list {
			padding: 3%;
			background-color: #fff;
			li {
				line-height: 2;
				font-size: 0.875rem;
				color: #555;
				&:first-child {
					display: flex;
					margin-bottom: 2px;
					span {
						color: #EA6F5A;
						font-size: 0.75;
						&:first-child {
							flex: 1;
							font-size: 1rem;
							color: #333;
						}
            .iconwenti {
            	color: #EA6F5A;
            	margin-right: 4px;
            }
            .iconguanbi {
            	color: #969696;
            	font-size: 0.75rem;
							margin-left: 8px;
            }
					}
				}
			}
		}
		.bottom {
			margin: 10px 0;
			background-color: #fff;
			.title {
				overflow: hidden;
				font-size: 1rem;
				padding: 3%; 
				span {
					color: #EA6F5A;
					font-size: 1.0625rem;
				}
			}
			ul {
				li {
					display: flex;
					padding: 3%;
					.left {
						width: 40px;
						height: 40px;
						margin-right: 10px;
						img {
							width: 40px;
							height: 40px;
							border-radius: 50%;
						}
					}
					.right {
						flex: 1;
						width: calc(100% - 50px);
						padding-bottom: 10px;
						border-bottom: 1px solid #f0f0f0;
						div {
							width: 100%;
							font-size: 0.75rem;
							color: #969696;
							text-overflow: ellipsis;
							overflow: hidden;
							white-space: nowrap;
							&:first-child {
								color: #333;
								font-size: 0.875rem;
								margin-bottom: 4px;
								span {
									color: #969696;
								}
							}
						}
					}
				}
			}
		}
	}
</style>