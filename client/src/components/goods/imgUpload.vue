<template>
  <el-form>
    <el-upload
      action="/api/goods/imgs"
      list-type="picture-card"
      multiple
      accept="image/jpeg,image/png" 
      :auto-upload=false
      :limit=5
      :file-list="fileList"
      :on-preview="handlePictureCardPreview"
      :on-remove="handleRemove"
      :on-exceed="handleExceed"
      :before-upload="handleBeforeUpload"
      :http-request="uploadFile"
      ref="upload">
      <i class="el-icon-plus"></i>
      <div class="el-upload__tip" slot="tip">只能上传jpg/png文件</div>
    </el-upload>
    <el-dialog :visible.sync="dialogVisible">
      <img width="100%" :src="dialogImageUrl" alt="">
    </el-dialog>
    <el-button type="primary" @click="submitForm">发布</el-button>
  </el-form>  
</template>

<script>
import { uploadGoodsDetail } from '../../api';

export default {
  data() {
    return {
      dialogImageUrl: '',
      dialogVisible: false,
      fileList:[],
      formData: '',
    };
  },
  methods: {
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    handleExceed(files, fileList) {
      // console.log(handleExceed, files, fileList);
    },
    handleBeforeUpload(file) {
      // console.log('handleBeforeUpload', file)
    },
    uploadFile(data) {
      this.formData.append('file', data.file)
    },
    submitForm() {
      this.formData = new FormData();
      this.$refs.upload.submit();
      uploadGoodsDetail(this.formData)
      .then(res => console.log(res))
      .catch(err => console.log(err))
    }
  }
}
</script>

<style scoped>

</style>
