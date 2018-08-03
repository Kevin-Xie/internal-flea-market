<template>
    <el-form :model="goodsInfo" :rules="rules" ref="infoForm" status-icon label-width="120px" label-position="left">
      <el-form-item label="goodsName" prop="name">
        <el-input v-model.trim="goodsInfo.name" placeholder="Goods Name"></el-input>
      </el-form-item>
      <el-form-item label="price" prop="price">
        <el-input v-model.number="goodsInfo.price" placeholder="Price"></el-input>
      </el-form-item>
      <el-form-item label="category" prop="category">
          <el-select v-model="goodsInfo.category" placeholder="category">
            <el-option v-for="(item, index) in categoryList" :key="index" :value="item" :label="item"></el-option>
          </el-select>
      </el-form-item>
      <el-form-item label="description" prop="description">
        <el-input type="textarea" v-model.trim="goodsInfo.description" placeholder="description"></el-input>
      </el-form-item>
      <el-form-item label="img upload">
        <v-img-upload ref="upload"></v-img-upload>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('infoForm')">发布</el-button>
      </el-form-item>
    </el-form>
</template>

<script>
import VImgUpload from './imgUpload';
import { uploadGoodsInfo } from '../../api';
import { successTip, errorTip } from '../common/message'
export default {
    name: 'publishGoods',
    data() {
        return {
            goodsInfo: {
                name: '',
                price: '',
                description: '',
                status: 'on_sale',
                category: ''
            },
            formData: '',
            categoryId: 0,
            categoryList: ['生活用品', '电子设备', '运动装备', '宠物相关', '学习用品', '衣着饰品', '其他'],
            rules: {
                name: [
                    { required: true, message: 'should not be empty', trigger: 'blur' },
                    { min: 1, max: 20, message: 'goodsName too long'}
                ],
                price: [
                    { required: true, message: 'should not be empty', trigger: 'blur' },
                    // { type: 'number', message: 'price should be Number', transform(value) { return _.toNumber(value)}},
                ],
                category: [
                    { required: true, message: 'please select one', trigger: 'change'}
                ],
                description: [
                    { min: 0, max: 300, message: 'should be less than 300 characters'}
                ]
            }
        }
    },
    components: { VImgUpload },
    methods: {
        submitForm(formName) {
            this.$refs[formName].validate().then(valid => {
                this.publishGoods();
            }).catch(err => {
                console.log(err)
            })
        },
        publishGoods() {
            this.formData = new FormData();
            let imageList = this.$refs.upload.getFileList();
            imageList.forEach(image => this.formData.append('file', image));
            for (let key in this.goodsInfo) {
                this.formData.append(key, this.goodsInfo[key])
            }
            uploadGoodsInfo(this.formData)
            .then(goods => {
                successTip('pulish successfully');
            })
            .catch(err => {
                errorTip('publish failed, pleaes try again.');
            })
        },
    }
}
</script>

<style scoped>
.el-form {
    width: 600px;
}
</style>
