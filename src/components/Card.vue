<script setup>
import { ref } from "vue";
import { getApi } from "../api/index";
const cardList = ref({
  name: "",
  img: "",
  content: "",
  id: "",
});
const apiNames = {
  product: "/product",
};
getApi(apiNames.product)
  .then((response) => {
    cardList.value = response.data.product.map((product) => {
      return {
        name: product.name,
        img: product.file_path,
        content: product.content,
        id: product.id,
      };
    });
  })
  .catch((error) => {
    console.error("失敗");
  });

const imgList = ref([
  "https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg",
  "https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg",
  "https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg",
  "https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg",
  "https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg",
  "https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg",
  "https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg",
]);
const html = document.querySelector("html");
import { useRouter } from "vue-router";
const router = useRouter();
const toDetail = (id) => {
  router.push(`/detail?id=${id}`);
  html.scrollTop = 0;
};
</script>

<template>
  <el-container>
    <el-row class="card-row">
      <el-col
        class="card-col"
        :xs="24"
        :sm="12"
        :md="8"
        :span="8"
        v-for="item in cardList"
        :key="item"
      >
        <el-card>
          <template #header
            ><b>{{ item.name }}</b></template
          >
          <el-row>
            <!-- <el-col style="display:flex; align-items: center; justify-content: start;" :span="24"><h2>{{item.name}}</h2></el-col> -->
            <el-col
              style="
                display: flex;
                align-items: center;
                justify-content: center;
              "
              :span="24"
              ><el-image
                :src="`${item.img}`"
                style="width: 200px; height: 200px; object-fit: contain"
                :preview-src-list="imgList"
            /></el-col>
            <el-col
              style="
                display: flex;
                align-items: center;
                justify-content: start;
                font-size: small;
              "
              :span="24"
              ><h2>{{ item.content }}</h2></el-col
            >
            <el-col
              style="display: flex; align-items: center; justify-content: end"
              :span="8"
              :offset="16"
              ><el-button @click="toDetail(item.id)">查看更多</el-button></el-col
            >
          </el-row>
        </el-card>
      </el-col>
    </el-row>
    <el-row class="pagination-block">
      <el-pagination
        layout="prev, pager, next"
        :total="50"
        :page-size="6"
        :pager-count="5"
        background
      />
    </el-row>
  </el-container>
</template>

<style scoped>
.el-container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 5% 0;
}
.card-row {
  width: 80%;
}
.el-card {
  margin: 5%;
}
.pagination-block {
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
