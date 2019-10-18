<template>
	<div class="diamonds">
		<div class="diamonds-name">
			<img src="../assets/images/head.png" alt="">
			<div class="name-info">
				<div>Mihansy</div>
				<div>Lv2青铜侠客</div>
			</div>
			<div class="count">402714</div>
		</div>
		<div class="diamonds-assets">
			<span class="detail">明细 > </span>
			<div class="da1">总资产（钻和贝）</div>
			<div class="da2">4.55</div>
			<div class="da3">约0.52元<span>我要变现</span></div>
			<div class="da4">
				<div>
					昨日总收益<span>+2.326</span>
				</div>
				<div>
					累计收益<span>+3.546</span>
				</div>
			</div>
		</div>
		<ul class="diamonds-other">
			<li class="clearfix">
				<span class="leftfloat">简书钻：2.77 <i class="iconfont iconbangzhu"></i></span>
				<span class="rightfloat">钻转贝 > </span>
			</li>
			<li class="clearfix">
				<span class="leftfloat">简书贝：1.773 <i class="iconfont iconbangzhu"></i></span>
				<span class="rightfloat">贝转钻 > </span>
			</li>
			<li class="clearfix">
				<span class="leftfloat">简书借钻：0 <i class="iconfont iconbangzhu"></i></span>
			</li>
		</ul>
		<ul class="diamonds-other">
			<li class="clearfix">
				<span class="leftfloat">收成加益卡 <i class="iconfont iconbangzhu"></i></span>
			</li>
			<li class="clearfix">
				<span class="leftfloat">105点</span>
				<a class="rightfloat">查看详情 > </a>
			</li>
		</ul>
	</div>
</template>

<script>
</script>

<style scoped lang="scss">
	.diamonds {
		.diamonds-name {
			height: 40px;
			line-height: 40px;
			display: flex;
			background: #fff;
			padding: 3%;
			border-bottom: 1px solid #f0f0f0;
			img {
				width:40px;
				height: 40px;
				border-radius: 50%;
				margin-right: 8px;
			}
			.name-info {
				flex: 1;
				color: #969696;
				font-size: 0.75rem;
				div {
					line-height: 1.3;
					&:first-child {
						color: #333;
						margin: 3px 0;
					}
				}
			}
			.count {
				color: #EA6F5A;
			}
		}
		.diamonds-assets {
			position: relative;
			background: #fff;
			margin-bottom: 10px;
			text-align: center;
			color: #969696;
			font-size: 0.875rem;
			padding: 3%;
			.detail {
				position: absolute;
				top: 10px;
				right: 10px;
			}
			.da2 {
				line-height: 2;
				color: #333;
				font-family: arial;
				font-size: 1.125rem;
			}
			.da3 {
				font-size: 0.75rem;
			}
			.da4 {
				width: 68%;
				line-height: 2.4;
				margin: 16px auto 8px;
				font-size: 0.75rem;
				background-color: #f0f0f0;
				border-radius: 20px;
				padding: 0 10%;
				display: flex;
				justify-content: space-between;
				div {
					span {
						color: #EA6F5A;
					}
				}
			}
		}
		.diamonds-other {
			background: #fff;
			margin: 10px 0;
			padding: 1% 3%;
			font-size: 0.875rem;
			li {
				overflow: hidden;
				line-height: 3;
				border-bottom: 1px solid #f0f0f0;
				&:last-child {
					border-bottom: 0;
				}
				span {
					color: #969696;
					font-size: 0.75rem;
					margin-top: 4px;
					&:first-child {
						margin-top: 0;
						font-size: 0.875rem;
						color: #333;
						i {
							color: #a2a0a0;
						}
					}
				}
				a {
					color: #2C009F;
				}
			}
		}
	}
</style>
