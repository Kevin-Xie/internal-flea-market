<template>
	<div>
		<v-top-banner></v-top-banner>
		<v-goods-list></v-goods-list>
	</div>
</template>

<script>
import VGoodsList from '../goods/goodsList'
import VTopBanner from '../advertisement/topBanner'
export default {
	name: 'home',
	data() {
		return {
			goodsList: []
		}
	},
	components: { VGoodsList, VTopBanner }
}
</script>

<style>
	
</style>
