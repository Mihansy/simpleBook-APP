<template>
  <div class="my">
    <div class="top">
		  <img src="../assets/images/head.png" alt="">
		  <div class="name-info">
			  <div class="name">Mihansy</div>
			  <div class="info">关注：10 &nbsp;&nbsp;&nbsp;&nbsp;粉丝：59</div>
		  </div>
	  </div>
	  <div class="assets">总资产：4.55元
		  <span class="rightfloat">查看 > </span>
	  </div>
	  <div class="menu">
			<a href="">
				<i class="iconfont iconwenzhang2"></i>
				我的文章
			</a>
			<a href="">
				<i class="iconfont iconhuifudetiezi"></i>
				我的帖子
			</a>
			<a href="">
				<i class="iconfont iconshengdan_xingxing"></i>
				赞和收藏
			</a>
			<a href="">
				<i class="iconfont iconweb-icon-"></i>
				奖励任务
			</a>
		</div>
	  <div class="my-swipe">
			<van-swipe :autoplay="3000" indicator-color="white" :height="80">
			  <van-swipe-item>
					<img src="https://upload.jianshu.io/admin_banners/web_images/4737/d3a7fcfbcf107bd986993cc6ec98e0756a463f7f.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540">
				</van-swipe-item>
			  <van-swipe-item>
					<img src="https://upload.jianshu.io/admin_banners/web_images/4748/26da92b5de81ba0ed22e351ba9097003e8b87136.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540">
				</van-swipe-item>
			  <van-swipe-item>
					<img src="https://img.yzcdn.cn/vant/apple-3.jpg">
				</van-swipe-item>
			  <van-swipe-item>
					<img src="https://img.yzcdn.cn/vant/apple-4.jpg">
				</van-swipe-item>
			</van-swipe>
		</div>
		<ul class="bottom">
			<li>
				<span>简书会员</span>
				<i class="iconfont iconxiangyou"></i>
			</li>
			<li>
				<span>简书活动</span>
				<i class="iconfont iconxiangyou"></i>
			</li>
			<li>
				<span>简东西</span>
				<i class="iconfont iconxiangyou"></i>
			</li>
			<li>
				<span>我的钱包</span>
				<i class="iconfont iconxiangyou"></i>
			</li>
			<li>
				<span>我的小岛/专题/文集</span>
				<i class="iconfont iconxiangyou"></i>
			</li>
			<li>
				<span>我的书架</span>
				<i class="iconfont iconxiangyou"></i>
			</li>
			<li>
				<span>浏览记录</span>
				<i class="iconfont iconxiangyou"></i>
			</li>
		</ul>
		<ul class="bottom">
			<li>
				<span>夜间模式</span>
				<i class="iconfont iconxiangyou"></i>
			</li>
			<li>
				<span>设置</span>
				<i class="iconfont iconxiangyou"></i>
			</li>
			<li>
				<span>帮助与反馈</span>
				<i class="iconfont iconxiangyou"></i>
			</li>
		</ul>
  </div>
</template>

<script>
	import { Swipe, SwipeItem } from 'vant';
	
	export default {
		name: 'my',
		components: {
			[Swipe.name]: Swipe,
			[SwipeItem.name]: SwipeItem
		}
	}
</script>

<style scoped lang="scss">
	.my {
		.top {
			display: flex;
			background-color: #fff;
			padding: 3%;
			img {
				width: 50px;
				height: 50px;
				border-radius: 50%;
				margin-right: 10px;
			}
			.name-info {
				color: #969696;
				font-size: 0.875rem;
				.name {
					color: #333;
					font-size: 1rem;
					margin: 4px 0;
				}
			}
		}
		.assets {
			background-color: #fff;
			line-height: 1.6;
			padding: 10px 3%;
			border-bottom: 1px solid #f0f0f0;
			span {
				font-size: 0.75rem;
				color: #969696;
			}
		}
		.menu {
			margin-bottom: 10px;
			padding: 5% 3%;
			background-color: #fff;
			display: flex;
			justify-content: space-between;
			a {
				display: block;
				text-align: center;
				font-size: 0.875rem;
				color: #333;
				i {
					display: block;
					font-size: 1.875rem;
					color: #EA6F5A;
					&.iconweb-icon- {
						font-size: 2rem;
					}
				}
			}
		}
		.my-swipe {
			width: 100%;
			height: 80px;
			margin-bottom: 10px;
			img {
				width: 100%;
				height: 100%;
			}
		}
		.bottom {
			background-color: #fff;
			margin-bottom: 10px;
			li {
				padding: 3%;
				border-bottom: 1px solid #f0f0f0;
				font-size: 0.875rem;
				overflow: hidden;
				span {
					color: #333;
				}
				i {
					color: #969696;
					float: right;
				}
			}
		}
	}
</style>