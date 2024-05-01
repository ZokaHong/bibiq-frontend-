<script setup>
import { ref, watch } from "vue";
const activeuserTab = ref("0");
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
    payStatus: false,
    shippingStatus: "未出貨",
    receipt: "a",
  },
  {
    index: "002",
    date: "2025-01-05 12:27",
    buyer: "張先生",
    orderStatus: "已成立",
    payMethod: "信用卡",
    payStatus: true,
    shippingStatus: "出貨中",
    receipt: "b",
  },
]);

const shippingOptions = ["未出貨", "出貨中", "已出貨"];

const textColor = ref(["red", "blue", "green"]);

const receiptVisible = ref(false);
</script>
<template>
  <el-container>
    <el-row class="user-row">
      <el-col class="user-header">
        <span>訂單詳情</span>
      </el-col>
      <el-col class="user-main">
        <el-table :data="tableData">
          <el-table-column
            prop="index"
            sortable
            label="訂單編號"
          ></el-table-column>
          <el-table-column
            prop="date"
            sortable
            label="訂單日期"
          ></el-table-column>
          <el-table-column prop="buyer" label="訂購人"></el-table-column>
          <el-table-column prop="payMethod" label="付款方式"></el-table-column>
          <el-table-column
            prop="orderStatus"
            label="訂單狀態"
          ></el-table-column>
          <el-table-column label="付款狀態">
            <template #default="scope">
              <div style="display: flex; align-items: center">
                  <span class="red">未付款</span>
              </div></template
            >
          </el-table-column>
          <el-table-column label="出貨狀態">
            <template #default="scope">
              <span class="red">{{shippingOptions[0]}}</span>
            </template>
          </el-table-column>
          <el-table-column prop="receipt" label="明細"
            ><el-link @click="receiptVisible = true"
              ><el-icon><Document /></el-icon></el-link
          ></el-table-column>
          <!-- <el-table-column label="編輯">
            <el-link>
              <el-icon><EditPen /></el-icon>
            </el-link>
          </el-table-column> -->
        </el-table>

        <el-dialog
          v-model="receiptVisible"
          width="1000"
          :show-close="false"
          align-center
        >
          <template #header="{ close, titleClass }">
            <el-row>
              <el-col :class="titleClass" :span="4"><h3>訂單明細</h3></el-col>
              <el-col
                :span="6"
                style="
                  display: flex;
                  flex-direction: column;
                  justify-content: space-evenly;
                "
              >
                <span style="text-align: start">訂單編號: 1234567890</span>
                <span style="text-align: start"
                  >訂單日期: 2025-01-01 10:30</span
                >
              </el-col>
              <el-col :span="2" :offset="12">
                <el-icon @click="close" size="30px" style="cursor: pointer"
                  ><Close
                /></el-icon>
              </el-col>
            </el-row>
            <el-divider />
            <el-row>
              <el-col
                ><el-row>
                  <el-col :span="4">商品</el-col>
                  <el-col :span="4">數量</el-col>
                  <el-col :span="4">單價</el-col>
                  <el-col :span="4">折扣</el-col>
                  <el-col :span="4">備註</el-col>
                  <el-col :span="4">總金額</el-col>
                </el-row></el-col
              >
              <el-divider />
              <el-col
                ><el-row>
                  <el-col :span="4">玉米</el-col>
                  <el-col :span="4">1</el-col>
                  <el-col :span="4">30</el-col>
                  <el-col :span="4"></el-col>
                  <el-col :span="4"></el-col>
                  <el-col :span="4">30</el-col>
                </el-row></el-col
              >
              <el-divider />

              <el-col :span="4" :offset="14">
                <el-row style="flex-direction: column; text-align: start">
                  <el-col>訂購人</el-col>
                  <el-col>手機號碼</el-col>
                  <el-col>配送方式</el-col>
                  <el-col>配送地址</el-col>
                </el-row>
              </el-col>
              <el-col :span="6">
                <el-row style="flex-direction: column; text-align: start">
                  <el-col>黃小姐</el-col>
                  <el-col>09-xxxxxxxx</el-col>
                  <el-col>宅配</el-col>
                  <el-col>台中市中區xxx號</el-col>
                </el-row>
              </el-col>
            </el-row>
          </template>
        </el-dialog>
      </el-col>
    </el-row>
  </el-container>
</template>
<style scoped>
.el-container {
  display: flex;
  justify-content: center;
}
.user-row {
  width: 80%;
  background-color: #fff;
  margin: 5% 0;
  padding: 2%;
}
.user-header {
  display: flex;
  justify-content: start;
  align-content: center;
  font: 400 24px Helvetica;
  padding: 10px 20px;
}
.user-header .el-icon {
  font-size: 30px;
}

.blue {
  color: blue;
}
.red {
  color: red;
}
.green {
  color: green;
}
</style>
