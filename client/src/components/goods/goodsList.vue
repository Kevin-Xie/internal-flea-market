<template>
    <div>
        <div style="display: flex;">
            <v-goods-item v-for="(goods, index) in goodsList" :key="index" :goods="goods"></v-goods-item>
        </div>
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
            goodsList: []
        }
    },
    components: { VGoodsItem },
    methods: {
        init() {
            getGoodsList().then(data => {
                console.log(data)
                this.goodsList = data;
            })
        }
    },
    mounted() {
        this.init()
    },
}
</script>
    
<style scoped>

</style>
    
