<template>
	<div class="wrapper">
		<a href="#"><img src="../../../assets/logo.png" class="logo"></a>
		<div class="menu">
			<v-menubar></v-menubar>
		</div>
		<div class="user-info">
			<v-user-info></v-user-info>
		</div>
	</div>
</template>

<script>
import VMenubar from '@/components/common/layout/menubar'
import VUserInfo from '@/components/common/layout/userInfo'

export default {
	name: 'appHeader',
	data() {
		return {

		}
	},
	components: { VMenubar, VUserInfo, },
	methods: {
	}
}
</script>

<style scoped>
.wrapper {
	height: 60px;
	line-height: 60px;
	text-align: center;
	font-size: 1.3rem;
	position: relative;
}

.logo {
	height: 60px;
	width: 60px;
	position: absolute;
	top: 0;
	left: 0;
}

.menu {
	height: 60px;
	margin: 0 160px 0 70px;
}

.user-info {
	width: 150px;
	position: absolute;
	right: 0;
	top: 0;
}
</style>