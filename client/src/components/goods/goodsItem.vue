<template>
    <div>
        <el-card :body-style="{ padding: '0px' }" shadow="hover">
            <img src="../../assets/car.jpg" class="image">
            <div style="padding:14px;">
                <span>{{goods.name}}</span>
                <div class="bottom clearfix">
                <time class="time">{{ goods.createAt.slice(0,10) }}</time>
                <el-button type="text" class="button">操作按钮</el-button>
                </div>
            </div>
        </el-card>
    </div>
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
}
.time {
    font-size: 13px;
    color: #999;
    text-align: left;
}
.image {
    width: 100%;
    display: block;
}

</style>
    
