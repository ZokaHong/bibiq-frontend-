<script setup>
import { ref } from "vue";
const itemColors = ref("");
const itemCount = ref("");
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
const count = ref([
  {
    value: "1",
    label: "1",
  },
  {
    value: "2",
    label: "2",
  },
  {
    value: "3",
    label: "3",
  },
  {
    value: "4",
    label: "4",
  },
]);
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
    <el-row class="content-row" :gutter="20" style="padding: 20px">
      <el-col :span="24" :md="8">
        <el-row style="display: flex; align-items: center; margin-top: 45px">
          <el-col>
            <el-image
              src="src/assets/pan.jpg"
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
          <el-col style="margin-top: 20px">
            <span class="item-event">discount: 無</span>
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="24" :md="16" style="margin-top: 20px; margin-bottom: 30px">
        <el-row style="text-align: start">
          <el-col :span="0" :md="16">
            <el-row>
              <el-col class="item-slogan"
                ><span>鍋身不沾黏塗層，好清洗防刮</span></el-col
              >
              <el-col>
                <h3><a href="#">3Q鍋具</a> 不沾深平底鍋</h3>
              </el-col>
              <el-col><span>銷售數量 > X萬件</span></el-col>
              <el-col><span>法國製造原裝進口</span></el-col>
              <el-col><span>耐磨鑽石不沾塗層</span></el-col>
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
          <el-col :span="24" :md="0">
            <h3><a href="#">3Q鍋具</a> 不沾深平底鍋</h3>
          </el-col>

          <el-col>
            <el-row style="margin: 30px 0">
              <el-col :span="24" :sm="12" :lg="8" style="margin-top: 10px">
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
              </el-col>
              <el-col :span="24" :sm="12" :lg="8" style="margin-top: 10px">
                <span>數量: </span>
                <el-select
                  v-model="itemCount"
                  size="small"
                  style="width: 100px; margin-left: 20px"
                >
                  <el-option
                    v-for="item in count"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  ></el-option> </el-select
              ></el-col>
              <el-col :span="24" :lg="8" style="margin-top: 10px">
                <div>
                  <span>價格: </span>
                  <span
                    class="item-price"
                    style="
                      font: 700 24px Helvetica;
                      font-style: italic;
                      margin-left: 20px;
                    "
                    >1380</span
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
