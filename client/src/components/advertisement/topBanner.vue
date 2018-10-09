<template>
    <div class="">
        <span class="demonstration">默认 Hover 指示器触发</span>
        <el-carousel height="150px">
            <el-carousel-item v-for="item in 4" :key="item" name="name" label="label">
                <h3>{{ item }}</h3>
            </el-carousel-item>
        </el-carousel>
    </div>
</template>

<script>
export default {
    name: 'topBanner',
    data() {
        return {
            
        }
    },
    methods: {
        
    },
    mounted() {
        console.log(this.$parent)
    },
}
</script>

<style scoped>

</style>
