<template>
    <div>
        <v-goods-item></v-goods-item>
        <el-button type="text">Load More</el-button>
    </div>
</template>
    
<script>
import VGoodsItem from './goodsItem'
import { getGoodsList } from '../../api'
export default {
    name: 'goodsList',
    data() {
        return {

        }
    },
    components: { VGoodsItem },
    methods: {
        init() {}
    },
    mounted() {
        getGoodsList().then(data => console.log(data))
    },
}
</script>
    
<style scoped>

</style>
    
