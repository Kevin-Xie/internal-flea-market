<template>
    <div>
        <v-goods-item v-for="(goods, index) in goodsList" :key="index" :goods="goods"></v-goods-item>
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
                // this.init()
        this.goodsList = [
            {name: 'CameraCameraCamera', status: '出售中', price: 99},
            {name: 'CameraCameraCamera', status: '出售中', price: 99},
            {name: 'CameraCameraCamera', status: '出售中', price: 99},
            {name: 'CameraCameraCamera', status: '出售中', price: 99},
            {name: 'CameraCameraCamera', status: '出售中', price: 99},
            {name: 'CameraCameraCamera', status: '出售中', price: 99},
            {name: 'CameraCameraCamera', status: '出售中', price: 99},
            {name: 'CameraCameraCamera', status: '出售中', price: 99},
            {name: 'CameraCameraCamera', status: '出售中', price: 99},

            {name: 'Camera', status: '出售中', },
            {name: 'Camera', status: '出售中', },
            {name: 'Camera', status: '2018-07-31', },
            {name: 'Camera', status: '2018-07-31', },
            {name: 'Camera', status: '2018-07-31', },
            {name: 'Camera', status: '2018-07-31', },
            {name: 'Camera', status: '2018-07-31', },
            {name: 'Camera', status: '2018-07-31', },
            {name: 'Camera', status: '2018-07-31', },
            {name: 'Camera', status: '2018-07-31', },
            {name: 'Camera', status: '2018-07-31', },
            {name: 'Camera', status: '2018-07-31', },
            {name: 'Camera', status: '2018-07-31', },
            {name: 'Camera', status: '2018-07-31', },
        ]
    },
}
</script>
    
<style scoped>

</style>
    
