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

import { useRoute, useRouter } from "vue-router";
const route = useRoute();
const id = parseInt(route.query.id);
const router = useRouter();

const isLoading = ref(false);

import { getApi } from "../api/index";

const apiNames = {
  product: `/product/${id}`,
};

const detailList = ref({
  file_path: "",
  id: "",
  introduce: "",
  name: "",
  price: "",
  stock: "",
});
// const matchedObject = ref();
onMounted(() => {
  getApi(apiNames.product)
    .then((response) => {
      [detailList.value] = response.data.product;
      // matchedObject.value = detailList.value.find((item) => item.id === id);
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
const buyNowEvent = () => {

  router.push("/shoppingcart");
};
const buyLaterEvent = () => {

};

</script>
<template>
  <el-container>
    <el-row class="content-row" style="padding: 20px" v-if="isLoading">
      <el-col
        :span="24"
        :md="8"
        style="display: flex; justify-content: center; align-items: center"
      >
        <el-row>
          <el-col>
            <el-image
              :src="detailList.file_path"
              style="
                width: 220px;
                height: 220px;
                border: 1px #000 solid;
                padding: 10px;
              "
              fit="contain"
              class="item-image"
            />
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="24" :md="16" style="padding: 20px 30px">
        <el-row style="text-align: start">
          <el-col :span="16">
            <el-row>
              <el-col>
                <h3>{{ detailList.name }}</h3>
              </el-col>
              <el-col
                ><span>{{ detailList.introduce }}</span></el-col
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
                    >{{ detailList.price }}</span
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
                  filterable
                  no-match-text="無符合數量"
                  placeholder="請選擇"
                  fit-input-width
                  style="width: 100px; margin-left: 20px"
                >
                  <el-option
                    v-for="item in detailList.stock"
                    :key="item"
                    :label="item"
                    :value="item"
                    style="text-align: center"
                  >
                  </el-option> </el-select
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
                    >{{ detailList.price * count }}</span
                  >
                  <span style="font: 700 14px Helvetica; margin-left: 3px"
                    >元</span
                  >
                </div></el-col
              >
            </el-row>
          </el-col>
        </el-row>
        <el-divider />
        <el-row style="width: 100%; text-align: center">
          <el-col :span="12"
            ><el-button type="danger" @click="buyNowEvent"
              >直接購買</el-button
            ></el-col
          >
          <el-col :span="12"
            ><el-button type="primary" @click="buyLaterEvent"
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
  margin: 5% 0;
}

.el-button {
  border: 2px solid rgba(100, 100, 100, 0.3);
  color: #ffffff;
  box-sizing: content-box;
  width: 100px;
  font: 700 20px "";
}

@media (max-width: 772px) {
  .el-button {
  border: 2px solid rgba(100, 100, 100, 0.3);
  color: #ffffff;
  box-sizing: content-box;
  width: 50px;
  font: 700 16px "";
  padding: 4px 16px;
}
} 
</style>
