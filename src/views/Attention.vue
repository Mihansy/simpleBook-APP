<template>
  <div class="attention">
    <van-tabs
      v-model="activeName"
    	title-inactive-color="#969696"
    	title-active-color="#333"
    	sticky
    	swipeable>
      <van-tab title="动态" name="a">
    		<div class="dynamic clearfix">
					<div class="title">最近更新
						<span class="rightfloat">查看全部 > </span>
					</div>
					<ul class="author-list clearfix">
						<li>
							<div>
							  <img src="http://upload.jianshu.io/users/upload_avatars/18491406/a52ae45e-fef9-4858-9186-09781bdbbc62.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/90/h/90/format/webp" alt="">
							</div>
							<span>林木成荫</span>
						</li>
						<li>
							<div>
							  <img src="http://upload.jianshu.io/users/upload_avatars/18491406/a52ae45e-fef9-4858-9186-09781bdbbc62.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/90/h/90/format/webp" alt="">
							</div>
							<span>林木成荫</span>
						</li>
						<li>
							<div>
							  <img src="http://upload.jianshu.io/users/upload_avatars/18491406/a52ae45e-fef9-4858-9186-09781bdbbc62.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/90/h/90/format/webp" alt="">
							</div>
							<span>林木成荫</span>
						</li>
						<li>
							<div>
							  <img src="http://upload.jianshu.io/users/upload_avatars/18491406/a52ae45e-fef9-4858-9186-09781bdbbc62.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/90/h/90/format/webp" alt="">
							</div>
							<span>林木成荫</span>
						</li>
					</ul>
				</div>
				<div class="article">
					<ul class="article-list">
						<li>
							<div class="info">
								<img src="http://upload.jianshu.io/users/upload_avatars/18491406/a52ae45e-fef9-4858-9186-09781bdbbc62.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/90/h/90/format/webp" alt="">
								<div class="right">
									<div class="name">林木成荫</div>
									<div>发表了文章 | 3小时前</div>
								</div>
								<span class="delete"><i class="iconfont iconguanbi"></i></span>
							</div>
							<h3 class="title">大牛总结的git使用技巧，写得太好了</h3>
							<div class="desc">官方话：Git是一个免费的开源分布式版本控制系统，旨在快速高效地处理从小型到大型项目的所有事务。它能自动帮我记录每次文件的改动，还可以让同事协作编辑，这样就不用自己管理一堆类似的文件了，也不需要把文件传来传去。如果想查看某次改动，只需要在软件里瞄一眼就可以。</div>
							<div class="btns">
								<span><i class="iconfont icontubiaozhizuo-"></i>评论</span>
								<span><i class="iconfont iconzan"></i>赞</span>
							</div>
						</li>
						<li>
							<div class="info">
								<img src="http://upload.jianshu.io/users/upload_avatars/18491406/a52ae45e-fef9-4858-9186-09781bdbbc62.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/90/h/90/format/webp" alt="">
								<div class="right">
									<div class="name">林木成荫</div>
									<div>发表了文章 | 3小时前</div>
								</div>
								<span class="delete"><i class="iconfont iconguanbi"></i></span>
							</div>
							<h3 class="title">大牛总结的git使用技巧，写得太好了</h3>
							<div class="desc">官方话：Git是一个免费的开源分布式版本控制系统，旨在快速高效地处理从小型到大型项目的所有事务。它能自动帮我记录每次文件的改动，还可以让同事协作编辑，这样就不用自己管理一堆类似的文件了，也不需要把文件传来传去。如果想查看某次改动，只需要在软件里瞄一眼就可以。</div>
							<div class="btns">
								<span><i class="iconfont icontubiaozhizuo-"></i>评论</span>
								<span><i class="iconfont iconzan"></i>赞</span>
							</div>
						</li>
						<li>
							<div class="info">
								<img src="http://upload.jianshu.io/users/upload_avatars/18491406/a52ae45e-fef9-4858-9186-09781bdbbc62.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/90/h/90/format/webp" alt="">
								<div class="right">
									<div class="name">林木成荫</div>
									<div>发表了文章 | 3小时前</div>
								</div>
								<span class="delete"><i class="iconfont iconguanbi"></i></span>
							</div>
							<h3 class="title">大牛总结的git使用技巧，写得太好了</h3>
							<div class="desc">官方话：Git是一个免费的开源分布式版本控制系统，旨在快速高效地处理从小型到大型项目的所有事务。它能自动帮我记录每次文件的改动，还可以让同事协作编辑，这样就不用自己管理一堆类似的文件了，也不需要把文件传来传去。如果想查看某次改动，只需要在软件里瞄一眼就可以。</div>
							<div class="btns">
								<span><i class="iconfont icontubiaozhizuo-"></i>评论</span>
								<span><i class="iconfont iconzan"></i>赞</span>
							</div>
						</li>
					</ul>
				</div>
    	</van-tab>
      <van-tab title="专题" name="b">
				<div class="special-content">
					<ul class="special-list">
						<li>
							<img src="http://upload.jianshu.io/users/upload_avatars/18491406/a52ae45e-fef9-4858-9186-09781bdbbc62.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/90/h/90/format/webp" alt="">
							<div class="right">
								<div class="title">
									<span class="name">想法</span>
									<span class="tip"></span>99+篇更新
								</div>
								<div>这里没有你要的答案</div>
							</div>
						</li>
						<li>
							<img src="http://upload.jianshu.io/users/upload_avatars/18491406/a52ae45e-fef9-4858-9186-09781bdbbc62.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/90/h/90/format/webp" alt="">
							<div class="right">
								<div class="title">
									<span class="name">想法</span>
									<span class="tip"></span>99+篇更新
								</div>
								<div>这里没有你要的答案</div>
							</div>
						</li>
					</ul>
				</div>
    	</van-tab>
      <van-tab title="连载" name="c">
    		<div class="empty">
    			<img src="../assets/images/icon_nocontent.png">
    			<span>暂无内容</span>
    		</div>
    	</van-tab>
			<van-tab title="文集" name="d">
				<div class="empty">
					<img src="../assets/images/icon_nocontent.png">
					<span>暂无内容</span>
				</div>
			</van-tab>
    </van-tabs>
  </div>
</template>

<script>
	import { Tab, Tabs } from 'vant'
	
	export default {
		name: 'attention',
		components: {
		  [Tab.name]: Tab,
		  [Tabs.name]: Tabs
		},
		data() {
			return {
				activeName: 'a'
			}
		}
	}
</script>

<style scoped lang="scss">
	.attention {
		.dynamic {
			padding: 3% 0;
			font-size: 0.75rem;
			color: #969696;
			background-color: #fff;
			margin-bottom: 10px;
			.title {
				font-size: 0.875rem;
				color: #333;
				padding: 2% 5% 3%;
				span {
					font-size: 0.75rem;
					color: #969696;
				}
			}
			.author-list {
				padding-left: 5%;
				li {
					display: inline-block;
					margin-left: 6px;
					margin-right: 6px;
					text-align: center;
					&:first-child {
						margin-left: 0;
					}
					div {
						width: 50px;
						height: 50px;
						border: 2px solid #EA6F5A;
						border-radius: 50px;
						margin-bottom: 4px;
						img {
							width: 46px;
							height: 46px;
							border-radius: 50%;
							border: 2px solid #fff;
						}
					}
					span {
						display: block;
					}
				}
			}
		}
		.article {
			height: 100%;
			.article-list {
				li {
					padding: 3% 4%;
					background-color: #fff;
					margin-bottom: 10px;
					.info {
						display: flex;
						color: #969696;
						img {
							width: 36px;
							height: 36px;
							border-radius: 50%;
							margin-right: 10px;
						}
						.right {
							flex: 1;
							font-size: 0.75rem;
							.name {
								color: #333;
								font-size: 1rem;
							}
						}
						.delete {
							i {
								font-size: 0.875rem;
							}
						}
					}
					.title {
						color: #333;
						font-weight: normal;
						font-size: 1rem;
						margin: 12px 0;
					}
					.desc {
						height: 64px;
						overflow: hidden;
						color: #656262;
						font-size: 0.875rem;
						line-height: 1.5;
					}
					.btns {
						text-align: right;
						color: #969696;
						font-size: 0.875rem;
						margin-top: 10px;
						span {
							margin-left: 20px;
							i {
								margin-right: 6px;
							}
						}
					}
				}
			}
		}
		.special-content {
			height: 100%;
			background-color: #fff;
			.special-list {
				
				li {
					display: flex;
					padding: 5%;
					border-bottom: 1px solid #f0f0f0;
					img {
						width: 40px;
						height: 40px;
						border-radius: 8px;
						margin-right: 16px;
					}
					.right {
						flex: 1;
						font-size: 0.75rem;
						color: #969696;
						.title {
							margin-top: 2px;
							margin-bottom: 2px;
							.name {
								font-size: 1rem;
								color: #333;
								margin-right: 4px;
							}
							.tip {
								display: inline-block;
								width: 8px;
								height: 8px;
								background-color: #ea6f5a;
								border-radius: 50%;
								margin-right: 4px;
							}
						}
					}
				}
			}
		}
		.empty {
			width: 100px;
			margin: 150px auto;
			text-align: center;
			img {
				display: block;
				width: 100px;
			  margin-bottom: 10px;
			}
		}
	}
</style>