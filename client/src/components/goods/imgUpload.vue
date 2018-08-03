<template>
  <div>
    <el-upload
      action="/api/goods/"
      list-type="picture-card"
      multiple
      accept="image/jpeg,image/png" 
      :auto-upload=false
      :limit=5
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
  </div>  
</template>

<script>
export default {
  data() {
    return {
      dialogImageUrl: '',
      dialogVisible: false,
      fileList:[],
    };
  },
  methods: {
    handleRemove(file, fileList) {
      // console.log(file, fileList);
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
      this.fileList.push(data.file);
    },
    getFileList() {
      this.$refs.upload.submit();
      return this.fileList;
    }
  }
}
</script>

<style scoped>

</style>
