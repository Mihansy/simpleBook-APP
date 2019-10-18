<template>
	<div class="special-subject">
		<div class="special-subject-swipe">
			<van-swipe :autoplay="3000" indicator-color="white" :height="150">
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
		<ul class="menu">
			<li>
				<i class="iconfont iconbeike"></i>
				<span>贝市场</span>
			</li>
			<li>
				<i class="iconfont iconlihua"></i>
				<span>简友广场</span>
			</li>
			<li>
				<i class="iconfont iconremen1"></i>
				<span>热门专题</span>
			</li>
			<li>
				<i class="iconfont icongonggao"></i>
				<span>投诉建议</span>
			</li>
			<li>
				<i class="iconfont iconliebiaodaohang_gongyi"></i>
				<span>互加公益</span>
			</li>
		</ul>
		<div class="list-title"><i class="iconfont icongengduo"></i>我关注的专题</div>
		<ul class="special-list">
			<li>
				<div class="small-img">
					<img src="http://upload.jianshu.io/users/upload_avatars/18491406/a52ae45e-fef9-4858-9186-09781bdbbc62.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/90/h/90/format/webp">
					<div>120人关注</div>
				</div>
				<div class="name">万卷好书</div>
			</li>
			<li>
				<div class="small-img">
					<img src="http://upload.jianshu.io/users/upload_avatars/18491406/a52ae45e-fef9-4858-9186-09781bdbbc62.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/90/h/90/format/webp">
					<div>120人关注</div>
				</div>
				<div class="name">万卷好书</div>
			</li>
			<li>
				<div class="small-img">
					<img src="http://upload.jianshu.io/users/upload_avatars/18491406/a52ae45e-fef9-4858-9186-09781bdbbc62.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/90/h/90/format/webp">
					<div>120人关注</div>
				</div>
				<div class="name">万卷好书</div>
			</li>
			<li>
				<div class="small-img">
					<img src="http://upload.jianshu.io/users/upload_avatars/18491406/a52ae45e-fef9-4858-9186-09781bdbbc62.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/90/h/90/format/webp">
					<div>120人关注</div>
				</div>
				<div class="name">万卷好书</div>
			</li>
		</ul>
	</div>
</template>

<script>
	import { Swipe, SwipeItem } from 'vant';
	
	export default {
		name: 'home-special-subject',
		components: {
			[Swipe.name]: Swipe,
			[SwipeItem.name]: SwipeItem
		}
	}
</script>

<style scoped lang="scss">
	.special-subject {
		.special-subject-swipe {
			width: 100%;
			height: 150px;
			img {
				width: 100%;
				height: 100%;
			}
		}
		.menu {
			display: flex;
			justify-content: space-between;
			background-color: #fff;
			padding: 5% 3% 4%;
			li {
				text-align: center;
				i {
					display: block;
					height: 1.5rem;
					font-size: 1.85rem;
					margin-bottom: 10px;
					&.iconbeike {
						font-size: 1.4rem;
						color: #e05244;
					}
					&.iconremen1 {
						font-size: 1.4rem;
						color: #dd0505;
					}
					&.iconlihua {
						color: #00bb90;
					}
					&.icongonggao {
						color: #ce23b9;
					}
					&.iconliebiaodaohang_gongyi {
						color: #db0860;
					}
				}
				span {
					display: block;
					font-size: 0.75rem;
				}
			}
		}
		.list-title {
			margin: 4% 0;
			line-height: 40px;
			background-color: #fff;
			i {
				margin: 0 10px;
				color: #ff976a;
			}
		}
		.special-list {
			display: flex;
			justify-content: space-between;
			flex-wrap: wrap;
			padding: 5%;
			background-color: #fff;
			li {
				width: 30%;
				margin-bottom: 20px;
				.small-img {
					position: relative;
					width: 100%;
					height: 100px;
					img {
						width: 100%;
						height: 100%;
						border-radius: 6px;
					}
					div {
						position: absolute;
						bottom: 0;
						left: 0;
						z-index: 1;
						width: 90%;
						padding-left: 10%;
						font-size: 0.75rem;
						color: #fff;
						height: 30px;
						line-height: 30px;
						background: linear-gradient(bottom, #000, #fff0);
						border-radius: 0 0 6px 6px;
					}
				}
				.name {
					font-size: .875rem;
					margin-top: 8px;
				}
			}
		}
	}
</style>
