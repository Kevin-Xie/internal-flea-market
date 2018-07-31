<template>
    <el-card :body-style="{ padding: '0px' }" shadow="hover">
        <div class="image-wrapper">
            <img src="../../assets/car.jpg" class="image">
        </div>
        <div style="padding:12px;">
            <span style="float: left">{{goods.name}}</span>
            <span style="float: right; color: #f44336;">￥{{goods.price}}</span> 
        </div>
        <div style="padding:12px;">
            <span class="status">{{ goods.status }}</span>
            <el-button type="text" class="button" @click="switchShowDetail">查看详情</el-button>
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
    methods: {
        switchShowDetail() {
            this.showDetail = !this.showDetail;
        }
    }
}
</script>
    
<style scoped>
.el-card {
    margin: 20px;
    width: 250px;
    height: 300px;
    display: inline-block;
}
.status {
    font-size: 13px;
    color: #f44336;
    text-align: left;
    padding: 12px 0;
    float: left;
}
.button {
    float: right;
}
.image-wrapper {
    width: 250px;
    height: 220px;
}
.image {
    width: 100%;
    height: 100%;
    display: block;
}

</style>
    
