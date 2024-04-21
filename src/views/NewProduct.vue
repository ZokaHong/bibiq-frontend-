<template>
  <el-container>
    <el-row class="newProduct-row">
      <el-col><h2>新增商品</h2></el-col>
      <el-col :span="6"> <h3>名稱</h3></el-col>
      <el-col :span="16"><el-input v-model="inputName"></el-input></el-col>
      <el-col :span="6"><h3>價格</h3></el-col>
      <el-col :span="16"><el-input v-model="inputPrice"></el-input></el-col>
      <el-col :span="6"><h3>庫存</h3></el-col>
      <el-col :span="16"><el-input v-model="inputStock"></el-input></el-col>
      <el-col :span="6"><h3>介紹</h3></el-col>
      <el-col :span="16"
        ><el-input v-model="inputIntroduce" :autosize="{ minRows: 2 }" type="textarea"></el-input
      ></el-col>
      <el-col :span="6"><h3>圖片</h3></el-col>
      <el-col :span="16" style="justify-content: start">
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
        </el-upload>
      </el-col>

      <el-col>
        <el-button
          @click="console.log(files)"
          size="large"
          style="background-color: aquamarine; color: black;margin-bottom: 10px;"
          >上傳</el-button
        >
      </el-col>
    </el-row>
  </el-container>
</template>

<script setup>
import { ref } from "vue";
import { Plus } from "@element-plus/icons-vue";
const inputName = ref("");
const inputIntroduce = ref("");
const inputPrice = ref("");
const inputStock = ref("");
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
  margin: 30px 0;
}
.newProduct-row {
  width: 80%;
  background-color: #ffffff;
}
.el-col {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px 0;
}
</style>
