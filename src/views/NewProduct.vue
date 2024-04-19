<template>
  <el-container>
    <el-row class="newProduct-row">
      <el-col :span="12">圖片</el-col>
      <el-col :span="12">
        <el-upload
          class="avatar-uploader"
          :http-request="uploadSumbit"
          multiple
          list-type="picture-card"
          v-model:file-list="files"
          :on-change="handleChange"
        >
          <template #trigger>
            <img v-if="imageUrl" :src="imageUrl" class="avatar" />
            <el-icon v-else class="avatar-uploader-icon"><Plus /></el-icon>
          </template>
          <button @click="console.log(files)">debug</button>
        </el-upload>
      </el-col>
    </el-row>
  </el-container>
</template>

<script setup>
import { ref } from "vue";
import { Plus } from "@element-plus/icons-vue";
const imageUrl = "";
const uploadSumbit = () => {
  console.log("提交");
};
const files = ref([]);

const handleChange = (uploadFile, uploadFiles) => {
  console.log(uploadFile, uploadFiles);
};
</script>

<style lang="scss" scoped>
.el-container {
  display: flex;
  justify-content: center;
}
.newProduct-row {
  width: 80%;
  background-color: #fff;
}
</style>
