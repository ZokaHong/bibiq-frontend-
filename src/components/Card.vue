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
const params = ref({ name: "all", page: 1, page_size: 20 });

onMounted(
  () => {
    //     // const searchData = JSON.parse(localStorage.getItem("searchData"));
    //     // if (searchData) {
    //     //   console.log(searchData);
    //     //   cardList.value = searchData;
    //     //   localStorage.removeItem("searchData");
    //     // } else {
    //     console.log(params.value);
    getApi(apiNames.product, params.value)
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
  // }
);

const createCard = (data) => {
  console.log("data", data);
  cardList.value = data;
};
defineExpose({ createCard });

import { useRouter } from "vue-router";
const router = useRouter();
const toDetail = (id) => {
  router.push(`/detail?id=${id}`);
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
              ><el-button class="viewMoreButton" @click="toDetail(item.id)"
                ><span class="viewMore"></span></el-button
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
.viewMoreButton {
  box-sizing: content-box;
  padding: 2px 8px;
  border: 1px inset #000;
  color: rgb(241, 85, 46);
  transition: 1.2s;
  background-color: rgba(241, 241, 241, 0.8);
}
.viewMore{
  display: block;
  width: 100px;
  height: 30px;
  position: relative;
  overflow: hidden;
}
.viewMoreButton:hover{
  background-color: rgba(241, 82, 82, 0.8);
}
.viewMoreButton:hover .viewMore::before{
  transform: translateX(-120%);
}
.viewMoreButton:hover .viewMore::after{
  transform: translateX(-150%);
}
.viewMore::before{
  font: 600 20px "";
  content: '查看更多';
  width: 100%;
  position: absolute; 
  left: 0%;
  transition: .8s;
}
.viewMore::after{
  content: 'More →';
  width: 100%;
  font: 700 24px "";
  position: absolute; 
  left: 150%;
  color: #000;
  transition: 1s;
  transform: translateX(0%);
}
</style>
