<script setup>
import { ref, onMounted } from "vue";
const itemColors = ref("");
const count = ref("");
const colors = ref([
  {
    value: "#bc8aae",
    label: "粉色",
  },
  {
    value: "#000000",
    label: "黑色",
  },
]);

import { useRoute } from "vue-router";
const route = useRoute();
const id = parseInt(route.query.id);

const isLoading = ref(false);

import { getApi } from "../api/index";

const apiNames = {
  product: "/product",
};

const detailList = ref({
  file_path: "",
  id: "",
  introduce: "",
  name: "",
  price: "",
  stock: "",
});
const matchedObject = ref();
onMounted(() => {
  getApi(apiNames.product)
    .then((response) => {
      detailList.value = response.data.product;
      matchedObject.value = detailList.value.find((item) => item.id === id);

      // if (matchedObject) {
      //   console.log(matchedObject.value);
      // } else {
      //   console.log("未找到匹配的对象");
      // }

      isLoading.value = true;
    })
    .catch((error) => {
      console.error("失敗");
      isLoading.value = true;
    });
});
</script>
<template>
  <el-container>
    <!-- <el-row class="sort-row">
      <el-col :span="4">分類1</el-col>
      <el-col :span="4">分類2</el-col>
      <el-col :span="4">分類3</el-col>
      <el-col :span="4">分類4</el-col>
      <el-col :span="4">分類5</el-col>
      <el-col :span="4">分類6</el-col>
    </el-row> -->
    <el-row
      class="content-row"
      :gutter="20"
      style="padding: 20px"
      v-if="isLoading"
    >
      <el-col :span="24" :md="8">
        <el-row style="display: flex; align-items: center; margin-top: 45px">
          <el-col>
            <el-image
              :src="matchedObject.file_path"
              style="
                width: 180px;
                height: 180px;
                border: 1px #000 solid;
                padding: 10px;
              "
              fit="contain"
              class="item-image"
            />
          </el-col>
          <!-- <el-col style="margin-top: 20px">
            <span class="item-event">discount: 無</span>
          </el-col> -->
        </el-row>
      </el-col>
      <el-col :span="24" :md="16" style="margin-top: 20px; margin-bottom: 30px">
        <el-row style="text-align: start">
          <el-col :span="16">
            <el-row>
              <el-col>
                <h3>{{ matchedObject.name }}</h3>
              </el-col>
              <el-col
                ><span>{{ matchedObject.introduce }}</span></el-col
              >
            </el-row>
          </el-col>
          <el-col :span="24" :md="6">
            <div
              class="brand"
              style="
                display: flex;
                align-items: center;
                margin-top: 25px;
                padding: 5px 10px;
                background-color: rgba(253, 235, 223, 0.4);
                border: 1px #000 solid;
              "
            >
              <el-image
                src="src/assets/chiikawa2.png"
                style="
                  width: 50px;
                  height: 50px;
                  background-color: #ffffff;
                  border: #000 1px dotted;
                "
                fit="contain"
              >
              </el-image>
              <el-link href="#" :underline="false" style="margin-left: 10px">
                <h3>3Q鍋具</h3></el-link
              >
            </div>
          </el-col>
          <!-- <el-col :span="24" :md="0">
            <h3><a href="#">3Q鍋具</a> 不沾深平底鍋</h3>
          </el-col> -->

          <el-col>
            <el-row style="margin: 30px 0">
              <!-- <el-col :span="24" :sm="12" :lg="8" style="margin-top: 10px">
                <span>選項: </span>
                <el-select
                  v-model="itemColors"
                  size="small"
                  style="width: 100px; margin-left: 20px"
                >
                  <el-option
                    v-for="item in colors"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  ></el-option>
                </el-select>
              </el-col> -->
              <el-col :span="24" :lg="8" style="margin: 10px 0">
                <div>
                  <span>單價: </span>
                  <span
                    class="item-price"
                    style="
                      font: 700 24px Helvetica;
                      font-style: italic;
                      margin-left: 20px;
                    "
                    >{{ matchedObject.price }}</span
                  >
                  <span style="font: 700 14px Helvetica; margin-left: 3px"
                    >元</span
                  >
                </div></el-col
              >
              <el-col :span="24" :lg="8" style="margin: 10px 0">
                <span>數量: </span>
                <el-select
                  v-model="count"
                  size="small"
                  style="width: 100px; margin-left: 20px"
                >
                  <el-option
                    v-for="item in matchedObject.stock"
                    :key="item"
                    :label="item"
                    :value="item"
                  ></el-option> </el-select
              ></el-col>

              <el-col :span="24" :lg="8" style="margin: 10px 0">
                <div>
                  <span>總價: </span>
                  <span
                    class="item-price"
                    style="
                      font: 700 24px Helvetica;
                      font-style: italic;
                      margin-left: 20px;
                    "
                    >{{ matchedObject.price * count }}</span
                  >
                  <span style="font: 700 14px Helvetica; margin-left: 3px"
                    >元</span
                  >
                </div></el-col
              >
            </el-row>
          </el-col>
          <el-divider />
          <el-col :xs="0" :sm="0" :md="24">
            <el-row style="width: 100%; text-align: center">
              <el-col :span="8"
                ><el-button type="warning">查看優惠券</el-button></el-col
              >
              <el-col :span="8"
                ><el-button type="danger">直接購買</el-button></el-col
              >
              <el-col :span="8"
                ><el-button type="primary">加入購物車</el-button></el-col
              >
            </el-row>
          </el-col>
        </el-row>
      </el-col>
    </el-row>

    <el-row class="fixed-footer-row">
      <el-col :xs="24" :sm="24" :span="0">
        <el-row style="width: 100%; text-align: center">
          <el-col :span="8"
            ><el-button type="warning" size="small"
              >查看優惠券</el-button
            ></el-col
          >
          <el-col :span="8"
            ><el-button type="danger" size="small">直接購買</el-button></el-col
          >
          <el-col :span="8"
            ><el-button type="primary" size="small"
              >加入購物車</el-button
            ></el-col
          >
        </el-row>
      </el-col>
    </el-row>
  </el-container>
</template>
<style scoped>
.el-container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.content-row {
  width: 80%;
  background-color: #ffffff;
  margin-top: 5%;
}

.fixed-footer-row {
  width: 100%;
  background-color: #ffffff;
  position: fixed;
  bottom: 0;
  padding: 20px;
  z-index: 2;
  border-top: 2px solid #000;
}
@media (min-width: 772px) {
  .fixed-footer-row {
    display: none;
  }
}
</style>
