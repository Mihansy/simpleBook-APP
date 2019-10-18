<template>
	<div class="recommend">
		<ul class="list">
			<li>
				<p class="title">大牛总结的git使用技巧，写得太好了</p>
				<div class="desc">官方话：Git是一个免费的开源分布式版本控制系统，旨在快速高效地处理从小型到大型项目的所有事务。它能自动帮我记录每次文件的改动，还可以让同事协作编辑，这样就不用自己管理一堆类似的文件了，也不需要把文件传来传去。如果想查看某次改动，只需要在软件里瞄一眼就可以。</div>
				<div class="info">
					<span><i class="iconfont icon31"></i>26.88</span>
					<span>邂逅江南</span>
					<span>4.5K阅读</span>
					<span>90评论</span>
					<span>290评论</span>
				</div>
			</li>
			<li>
				<p class="title">大牛总结的git使用技巧，写得太好了</p>
				<div class="desc">官方话：Git是一个免费的开源分布式版本控制系统，旨在快速高效地处理从小型到大型项目的所有事务。它能自动帮我记录每次文件的改动，还可以让同事协作编辑，这样就不用自己管理一堆类似的文件了，也不需要把文件传来传去。如果想查看某次改动，只需要在软件里瞄一眼就可以。</div>
				<div class="info">
					<span><i class="iconfont icon31"></i>26.88</span>
					<span>邂逅江南</span>
					<span>4.5K 阅读</span>
					<span>90 评论</span>
					<span>290 评论</span>
				</div>
			</li>
			<li>
				<p class="title">大牛总结的git使用技巧，写得太好了</p>
				<div class="desc">官方话：Git是一个免费的开源分布式版本控制系统，旨在快速高效地处理从小型到大型项目的所有事务。它能自动帮我记录每次文件的改动，还可以让同事协作编辑，这样就不用自己管理一堆类似的文件了，也不需要把文件传来传去。如果想查看某次改动，只需要在软件里瞄一眼就可以。</div>
				<div class="info">
					<span><i class="iconfont icon31"></i>26.88</span>
					<span>邂逅江南</span>
					<span>4.5K 阅读</span>
					<span>90 评论</span>
					<span>290 评论</span>
				</div>
			</li>
			<li>
				<p class="title">大牛总结的git使用技巧，写得太好了</p>
				<div class="desc">官方话：Git是一个免费的开源分布式版本控制系统，旨在快速高效地处理从小型到大型项目的所有事务。它能自动帮我记录每次文件的改动，还可以让同事协作编辑，这样就不用自己管理一堆类似的文件了，也不需要把文件传来传去。如果想查看某次改动，只需要在软件里瞄一眼就可以。</div>
				<div class="info">
					<span><i class="iconfont icon31"></i>26.88</span>
					<span>邂逅江南</span>
					<span>4.5K 阅读</span>
					<span>90 评论</span>
					<span>290 评论</span>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		name: 'home-recommend'
	}
</script>

<style scoped lang="scss">
	.recommend {
		text-align: left;
		.list {
			background-color: #f0f0f0;
			li {
				padding: 5% 5%;
				margin-bottom: 3%;
				background-color: #fff;
				.title {
					color: #333;
					font-size: 1.125rem;
				}
				.desc {
					max-height: 124px;
					line-height: 1.5;
					font-size: 0.875rem;
					margin: 10px 0;
					overflow: hidden;
				}
				.info {
					font-size: 0.75rem;
					color: #969696;
					span {
						padding: 0 5px;
						&:first-child {
							color: #ea6f5a;
							i {
								vertical-align: top;
							}
						}
					}
				}
			}
		}
	}
</style>
