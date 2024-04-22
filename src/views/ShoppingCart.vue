<script setup>
import { ref } from "vue";
const checked1 = ref(false);
const defaultOption = ref({
  item: "帽T",
  label: "黑色",
  price: "55",
  stock: "8",
  count: "1",
});
const options = [
  { label: "黑色", price: "55", stock: "8" },
  { label: "白色", price: "85", stock: "4" },
  { label: "紅色", price: "56", stock: "3" },
  { label: "藍色", price: "98", stock: "0" },
];
</script>
<template>
  <el-container>
    <el-row class="shoppingCart-row">
      <el-col :span="24" class="shoppingCart-header">
        <el-link :underline="false" href="#">
          <el-icon><Back /></el-icon>
        </el-link>
        <span style="margin-left: 20px">購物車</span>
      </el-col>
      <el-col :span="24" class="shoppingCart-main">
        <el-row>
          <el-col
            :xs="3"
            :sm="3"
            :span="2"
            style="display: flex; justify-content: center; align-items: center"
          >
            <el-checkbox v-model="checked1" size="large" />
          </el-col>
          <el-col :xs="10" :sm="6" :span="4">
            <el-image class="item-img" />
          </el-col>
          <el-col :xs="8" :sm="4" :span="6">
            <el-row style="height: 100%">
              <el-col :span="24" style="text-align: start">
                <span>
                  {{ defaultOption.item }}
                </span></el-col
              >
              <el-col :span="24" style="text-align: start">
                <el-select v-model="defaultOption.label" class="labelSelect"
                  ><el-option
                    v-for="item in options"
                    :key="item.label"
                    :label="item.label"
                    :value="item.label"
                    @click="
                      (defaultOption.price = item.price),
                        (defaultOption.stock = item.stock)
                    "
                    ><span>{{ item.label }}</span></el-option
                  >
                </el-select>
              </el-col>
              <el-col :xs="24" :span="0" style="text-align: center"
                ><span>$ {{ defaultOption.price }}</span></el-col
              >
            </el-row>
          </el-col>
          <el-col :xs="3" :span="0">
            <el-row>
              <el-col :span="24">
                <el-link :underline="false">
                  <el-icon><CloseBold /></el-icon> </el-link
              ></el-col>
              <el-col :span="24">
                <el-link :underline="false">
                  <el-icon><InfoFilled /></el-icon> </el-link
              ></el-col>
            </el-row>
          </el-col>
          <el-col :xs="24" :sm="4" :span="6">
            <el-row style="height: 100%">
              <el-col
                :xs="{ span: 11, offset: 2 }"
                :span="0"
                style="margin-top: auto; margin-bottom: auto"
                ><span>商品庫存: {{ defaultOption.stock }}</span></el-col
              >
              <el-col :xs="0" :span="24" style="text-align: start"
                ><span>$ {{ defaultOption.price }}</span></el-col
              >
              <el-col :xs="8" :span="24" class="countCol">
                <!-- <el-select v-model="defaultOption.count">
                  <el-option
                    v-for="item in parseInt(defaultOption.stock)"
                    :key="item"
                    :label="item"
                    :value="item"
                    >{{ item }}</el-option
                  >
                </el-select> -->
                <el-button
                  class="countButton"
                  @click="
                    defaultOption.count =
                      defaultOption.count > 1
                        ? parseInt(defaultOption.count) - 1
                        : defaultOption.count
                  "
                  ><span>-</span></el-button
                ><span style="margin: 0 15px">{{ defaultOption.count }}</span
                ><el-button
                  class="countButton"
                  @click="
                    defaultOption.count =
                      defaultOption.count < defaultOption.stock
                        ? parseInt(defaultOption.count) + 1
                        : defaultOption.count
                  "
                  ><span>+</span></el-button
                ></el-col
              >
            </el-row>
          </el-col>
          <el-col :xs="0" :span="4"
            ><el-row style="height: 100%">
              <el-col :span="24"
                ><span>商品庫存: {{ defaultOption.stock }}</span></el-col
              >
              <el-col :xs="0" :span="24"><span>注意須知:</span></el-col>
            </el-row></el-col
          >
          <el-col :xs="0" :sm="3" :span="2">
            <el-link :underline="false">
              <el-icon style="font-size: 32px"><CloseBold /></el-icon>
            </el-link>
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="24" class="shoppingCart-footer" style="margin-top: 50px">
        <el-row>
          <el-col :span="6">
            <el-row>
              <el-col :span="12">
                <el-checkbox v-model="checked1" size="large" />
              </el-col>
              <el-col
                :span="12"
                style="text-align: start; margin-top: auto; margin-bottom: auto"
              >
                <span>全選</span>
              </el-col>
            </el-row>
          </el-col>
          <el-col
            :span="6"
            style="text-align: center; margin-top: auto; margin-bottom: auto"
          >
            <el-link :underline="false">優惠券</el-link>
          </el-col>
          <el-col
            :span="6"
            style="text-align: center; margin-top: auto; margin-bottom: auto"
            ><span>總金額 $</span></el-col
          >
          <el-col
            :span="6"
            style="text-align: center; margin-top: auto; margin-bottom: auto"
          >
            <el-link :underline="false">買單</el-link>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </el-container>
</template>
<style scoped>
.el-container {
  display: flex;
  justify-content: center;
}
.shoppingCart-row {
  width: 80%;
  background-color: #fff;
  margin-top: 5%;
}
.shoppingCart-header {
  display: flex;
  justify-content: start;
  align-content: center;
  font: 400 28px Helvetica;
  padding: 20px;
}
.shoppingCart-header .el-icon {
  font-size: 30px;
}
.item-img {
  width: 150px;
  height: 150px;
}
.labelSelect {
  width: 60%;
}
.countCol {
  text-align: start;
}
.countButton {
  padding: 6px 10px;
}
.countButton span {
  width: 10px;
}
.shoppingCart-footer {
  background-color: #ccf2f5;
}
@media (max-width: 772px) {
  .shoppingCart-header {
    font: 400 18px Helvetica;
    padding: 10px;
  }
  .shoppingCart-header .el-icon {
    font-size: 18px;
  }
  .shoppingCart-row {
    width: 90%;
  }
  .item-img {
    width: 100px;
    height: 100px;
  }
  .labelSelect {
    width: 100%;
  }
  .countCol {
    text-align: center;
  }
  .countButton {
    padding: 2px 8px;
  }
}
</style>
