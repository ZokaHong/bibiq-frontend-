<script setup>
import { onMounted, ref } from "vue";
import { getApi } from "../api/index";
const cardList = ref({
  name: "",
  file_path: "",
  content: "",
  id: "",
});
const apiNames = {
  product: "/product",
};

onMounted(() => {
  const searchData = JSON.parse(localStorage.getItem("searchData"));
  if (searchData) {
    cardList.value = searchData;
    localStorage.removeItem("searchData");
  } else {
    getApi(apiNames.product)
      .then((response) => {
        cardList.value = response.data.product.map((product) => {
          return {
            name: product.name,
            file_path: product.file_path,
            content: product.content,
            id: product.id,
          };
        });
        pageTotal.value = cardList.value.length;
      })
      .catch((error) => {
        console.error("失敗");
      });
  }
});

const createCard = (data) => {
  console.log("data", data);
  cardList.value = data;
};
defineExpose({ createCard });

const imgList = ref([
  "https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg",
]);
const html = document.querySelector("html");
import { useRouter } from "vue-router";
const router = useRouter();
const toDetail = (id) => {
  router.push(`/detail?id=${id}`);
  html.scrollTop = 0;
};
const pageTotal = ref(50);
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
            ><span style="font: 700 24px ''">{{ item.name }}</span></template
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
                :src="`${item.file_path}`"
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
              ><el-button @click="toDetail(item.id)"
                >查看更多</el-button
              ></el-col
            >
          </el-row>
        </el-card>
      </el-col>
    </el-row>
    <el-row class="pagination-block">
      <el-pagination
        layout="prev, pager, next"
        v-model:total="pageTotal"
        :page-size="3"
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
