<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();

const goToHomePage = () => {
  router.push("/");
};

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

const receiptVisible = ref(false);

import { getApi } from "../api/index";
import { ElDivider } from "element-plus";
const apiNames = {
  order: "/order",
};
const data = ref({
  order: {
    address: "台中中區",
    amount: "",
    id: "1",
    user_name: "小張",
    user_account: "qaz12345",
    order_detail: [
      {
        product_name: "番茄",
        quantity: "5",
      },
    ],
  },
  status: "",
});

const params = ref({ page: 1, page_size: 20, end_date: "", start_date: "" });
console.log(data.value);

const token = localStorage.getItem("token");

getApi(apiNames.order, params.value, { Authorization: `Bearer ${token}` })
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log("尚未登入");
  });
</script>
<template>
  <el-container>
    <el-row class="user-row">
      <el-col class="user-header">
        <el-link :underline="false" @click="goToHomePage">
          <el-icon><Back /></el-icon>
        </el-link>
        <span style="margin-left: 20px">訂單詳情</span>
      </el-col>
      <el-divider />
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
              <span class="red">{{ shippingOptions[0] }}</span>
            </template>
          </el-table-column>
          <el-table-column prop="receipt" label="明細"
            ><el-link @click="receiptVisible = true"
              ><el-icon size="28px"><Document /></el-icon></el-link
          ></el-table-column>
        </el-table>

        <el-dialog
          v-model="receiptVisible"
          width="1000"
          :show-close="false"
          align-center
        >
          <template #header="{ close, titleClass }">
            <el-row>
              <el-col :class="titleClass" :span="6"><h3>訂單明細</h3></el-col>
              <!-- <el-col
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
              </el-col> -->
              <el-col :span="2" :offset="16">
                <el-icon @click="close" size="30px" style="cursor: pointer"
                  ><Close
                /></el-icon>
              </el-col>
            </el-row>
            <el-divider />
            <el-row>
              <el-col
                ><el-row>
                  <el-col :span="6">商品</el-col>
                  <el-col :span="6">數量</el-col>
                  <el-col :span="6">單價</el-col>
                  <el-col :span="6">總金額</el-col>
                </el-row></el-col
              >
              <el-divider />
              <el-col v-for="item in data.order.order_detail"
                ><el-row>
                  <el-col :span="6">{{ item.product_name }}</el-col>
                  <el-col :span="6">{{ item.quantity }}</el-col>
                  <el-col :span="6">#30</el-col>
                  <el-col :span="6">#30</el-col>
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
  padding: 5px 10px;
}
.user-header .el-icon {
  font-size: 28px;
}

@media (max-width: 772px) {
  .user-header {
    font: 400 24px Helvetica;
    padding: 10px;
  }
  .user-header .el-icon {
    font-size: 24px;
  }
}
</style>
