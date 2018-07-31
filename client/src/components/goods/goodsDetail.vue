<template>
	<el-dialog title="title" :visible.sync="dialogVisible" @close="closeDialog">
		<el-form>
			<el-form-item>
				<img src="../../assets/car.jpg">
			</el-form-item>
		</el-form>
	</el-dialog>
</template>

<script>
export default {
	name: 'goodsDetail',
	data() {
		return {
			dialogVisible: true
		}
	},
	methods: {
		closeDialog() {
			this.$emit('close')
		}
	}

}
</script>

<style scoped>
	
</style>