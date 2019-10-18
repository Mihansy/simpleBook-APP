<template>
  <div class="home">
		<div class="search-box">
			<van-cell-group>
			  <van-field 
				  :border="false" 
					v-model="searchWord"
					input-align="center"
					placeholder="搜索感兴趣的内容" />
			</van-cell-group>
		</div>
		<van-tabs 
		  v-model="activeName"
			title-inactive-color="#969696"
			title-active-color="#333"
			sticky
			swipeable>
		  <van-tab title="推荐" name="a">
				<HomeRecommend></HomeRecommend>
			</van-tab>
		  <van-tab title="专题" name="b">
				<HomeSpecialSubject></HomeSpecialSubject>
			</van-tab>
		  <van-tab title="连载" name="c">
				<HomeSerial></HomeSerial>
			</van-tab>
		</van-tabs>
  </div>
</template>

<script>
	import HomeRecommend from '@/components/home/Recommend.vue'
	import HomeSpecialSubject from '@/components/home/SpecialSubject.vue'
	import HomeSerial from '@/components/home/Serial.vue'
	import { CellGroup, Field, Tab, Tabs } from 'vant'
	
	export default {
		name: 'home',
		components: {
			HomeRecommend,
			HomeSpecialSubject,
			HomeSerial,
		  [CellGroup.name]: CellGroup,
			[Field.name]: Field,
			[Tab.name]: Tab,
			[Tabs.name]: Tabs
		},
		data() {
			return {
				searchWord: '',
				activeName: 'a'
			}
		}
	}
</script>

<style scoped lang="scss">
	.home {
		.search-box {
			width: 90%;
			height: 36px;
			padding: 5%;
			background-color: #fff;
			.van-cell-group {
				background-color: #f0f0f0;
				border-radius: 20px;
				.van-cell {
					background-color: #f0f0f0;
					padding: 6px 16px;
					border-radius: 20px;
				}
			}
		}
	}
	[class*=van-hairline]::after {
		border: 0 !important;
	}
	.van-hairline--top-bottom::after, 
	.van-hairline-unset--top-bottom::after {
    border: 0 !important;
	}
	
</style>
