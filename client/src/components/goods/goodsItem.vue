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
            <el-button type="text" class="button">查看详情</el-button>
        </div>
    </el-card>
</template>
    
<script>
export default {
    name: 'goodsItem',
    data() {
        return {

        }
    },
    props: ['goods']
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
    
