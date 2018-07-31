<template>
	<div>
		<v-goods-list></v-goods-list>
	</div>
</template>

<script>
import VGoodsList from '../goods/goodsList'
export default {
	name: 'home',
	data() {
		return {
			goodsList: []
		}
	},
	components: { VGoodsList }
}
</script>

<style>
	
</style>