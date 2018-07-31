<template>
    <div>
        <v-goods-item></v-goods-item>
        <el-button type="text">Load More</el-button>
    </div>
</template>
    
<script>
import VGoodsItem from './goodsItem'

export default {
    name: 'goodsList',
    data() {
        return {

        }
    },
    components: { VGoodsItem }
}
</script>
    
<style scoped>

</style>
    
