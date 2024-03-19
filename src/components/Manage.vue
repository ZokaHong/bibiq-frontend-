<script setup>
import { ref } from "vue";
const activeManageTab = ref("0");
const selectOrderStatus = ref("");
const optionsOrderStatus = ref([
  { name: "待處理", value: "1" },
  { name: "已成立", value: "2" },
  { name: "未成立", value: "3" },
]);
const selectPayStatus = ref("");
const optionsPayStatus = ref([
  { name: "未付款", value: "1" },
  { name: "已付款", value: "2" },
  { name: "延遲撥款", value: "3" },
]);
const selectShippingStatus = ref("");
const optionsShippingStatus = ref([
  { name: "未出貨", value: "1" },
  { name: "出貨中", value: "2" },
  { name: "已出貨", value: "3" },
]);

const tableData = ref([
  {
    index: "001",
    date: "2025-01-01 10:30",
    buyer: "黃小姐",
    orderStatus: "已成立",
    payMethod: "貨到付款",
    payStatus: "未付款",
    shippingStatus: "未出貨",
    receipt: "a",
  },
  {
    index: "002",
    date: "2025-01-05 12:27",
    buyer: "張先生",
    orderStatus: "已成立",
    payMethod: "信用卡",
    payStatus: "已付款",
    shippingStatus: "出貨中",
    receipt: "b",
  },
]);
</script>
<template>
  <el-container>
    <el-row class="manage-row">
      <el-col :span="24" class="manage-header">
        <span>訂單管理</span>
      </el-col>
      <el-col :span="24" class="manage-tabs">
        <el-tabs
          v-model="activeManageTab"
          class="manageTabs"
          style="margin-left: 10px"
        >
          <el-tab-pane label="全部訂單" name="0">全部訂單</el-tab-pane>
          <el-tab-pane label="訂單狀態" name="1" style="text-align: start">
            <el-select
              v-model="selectOrderStatus"
              placeholder="訂單狀態"
              style="width: 30%"
            >
              <el-option
                v-for="item in optionsOrderStatus"
                :key="item.value"
                :label="item.name"
                :value="item.value"
              />
            </el-select>
            <el-divider />
            訂單狀態
          </el-tab-pane>
          <el-tab-pane label="付款狀態" name="2" style="text-align: start">
            <el-select
              v-model="selectOrderStatus"
              placeholder="付款狀態"
              style="width: 30%"
            >
              <el-option
                v-for="item in optionsPayStatus"
                :key="item.value"
                :label="item.name"
                :value="item.value"
              />
            </el-select>
            <el-divider />
            付款狀態
          </el-tab-pane>
          <el-tab-pane label="出貨狀態" name="3" style="text-align: start">
            <el-select
              v-model="selectShippingStatus"
              placeholder="出貨狀態"
              style="width: 30%"
            >
              <el-option
                v-for="item in optionsShippingStatus"
                :key="item.value"
                :label="item.name"
                :value="item.value"
              />
            </el-select>
            <el-divider />
            出貨狀態
          </el-tab-pane>
          <el-tab-pane label="已完成" name="4">已完成</el-tab-pane>
          <el-tab-pane label="已取消" name="5">已取消</el-tab-pane>
        </el-tabs>
      </el-col>
      <el-col class="manage-main">
        <el-table :data="tableData">
          <el-table-column prop="index" label="訂單編號"></el-table-column>
          <el-table-column prop="date" label="訂單日期"></el-table-column>
          <el-table-column prop="buyer" label="訂購人"></el-table-column>
          <el-table-column prop="payMethod" label="付款方式"></el-table-column>
          <el-table-column
            prop="orderStatus"
            label="訂單狀態"
          ></el-table-column>
          <el-table-column prop="payStatus" label="付款狀態"></el-table-column>
          <el-table-column
            prop="shippingStatus"
            label="出貨狀態"
          ></el-table-column>
          <el-table-column prop="receipt" label="明細"
            ><el-link
              ><el-icon><Document /></el-icon></el-link
          ></el-table-column>
          <el-table-column label="編輯"
            ><el-link>
              <el-icon><EditPen /></el-icon>
            </el-link>
          </el-table-column>
        </el-table>
      </el-col>
      <el-col class="manage-footer"></el-col>
    </el-row>
  </el-container>
</template>
<style scoped>
.el-container {
  display: flex;
  justify-content: center;
}
.manage-row {
  width: 80%;
  background-color: #fff;
}
.manage-header {
  display: flex;
  justify-content: start;
  align-content: center;
  font: 400 28px Helvetica;
  padding: 20px;
}
.manage-header .el-icon {
  font-size: 30px;
}
</style>
