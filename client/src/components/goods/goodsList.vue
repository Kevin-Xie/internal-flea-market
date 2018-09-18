<template>
    <div class="goods-list-wrapper">
        <div class="goods-list">
            <v-goods-item v-for="(goods, index) in goodsList" :key="index" :goods="goods"></v-goods-item>
        </div>
        <el-button type="text" @click="loadMore">Load More</el-button>
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
        },
        loadMore() {
            console.log('loadMore')
        }
    },
    mounted() {
        this.init()
    },
}
</script>
    
<style scoped>
.goods-list-wrapper {
    margin: 0 auto;
}
.goods-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
}

.el-button {
    display: block;
    margin: 0 auto;
}
</style>
    
