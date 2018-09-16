<template>
    <el-card :body-style="{ padding: '0px' }" shadow="hover">
        <!-- <img :src="goods.pictures[0]" class="image"> -->
        <img src="../../assets/car.jpg" class="image">
        <div class="goods-info-container">
            <div class="goods-info">
                <span>{{ goods.name }}</span>
                <span style="float: right;">{{ goods.price }}</span>
            </div>
            <div class="goods-info">
                <span style="color: red;">{{ goods.status }}</span>
                <el-button type="text"  @click="switchShowDetail">查看详情</el-button>
            </div>
        </div>
        <v-goods-detail v-if="showDetail" @close="switchShowDetail"></v-goods-detail>
    </el-card>
</template>
    
<script>
import VGoodsDetail from './GoodsDetail'    
export default {
    name: 'goodsItem',
    data() {
        return {
            showDetail: false
        }
    },
    
    props: ['goods'],
    
    components: { VGoodsDetail },
    
    computed: {
        goodsImage: () => this.goods.picture[0],
    },

    methods: {
        switchShowDetail() {
            this.showDetail = !this.showDetail;
        }
    }
}
</script>
    
<style scoped>
.el-card {
    width: 250px;
    font-size: 1.2em;
    margin: 20px;
}

.image {
    width: 100%;
    height: 220px;

}

.goods-info {
    margin: 10px 0;
}

.goods-info-container {
    position: relative;
    margin: 10px;

}
.el-button {
    float: right;
    padding: 0;
}
</style>
    
