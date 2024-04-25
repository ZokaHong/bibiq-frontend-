<script setup>
import { ref } from "vue";
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

import { Plus } from "@element-plus/icons-vue";
const inputName = ref("");
const inputIntroduce = ref("");
const inputPrice = ref("");
const inputStock = ref("");
const imageUrl = "";
const uploadSumbit = () => {
  console.log("提交");
};
const files = ref([]);

const handleChange = (uploadFile, uploadFiles) => {
  console.log(uploadFile, uploadFiles);
};

const activePage = ref("manage");
</script>
<template>
  <el-container>
    <el-tabs v-model="activePage">
      <el-tab-pane name="manage">
        <template #label>
          <span class="tabs-label">訂單管理</span>
        </template>
        <el-row class="manage-row">
          <el-col>
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
              <el-table-column
                prop="payMethod"
                label="付款方式"
              ></el-table-column>
              <el-table-column
                prop="orderStatus"
                label="訂單狀態"
              ></el-table-column>
              <el-table-column label="付款狀態">
                <template #default="scope">
                  <div style="display: flex; align-items: center">
                    <el-button
                      @click="scope.row.payStatus = !scope.row.payStatus"
                      :style="{
                        backgroundColor: scope.row.payStatus
                          ? '#84d2ca'
                          : '#eb2322',
                      }"
                    >
                      <span v-if="scope.row.payStatus">已付款</span>
                      <span v-else>未付款</span>
                    </el-button>
                  </div></template
                >
              </el-table-column>
              <el-table-column label="出貨狀態">
                <template #default="scope">
                  <el-select v-model="scope.row.shippingStatus">
                    <el-option
                      v-for="(item, index) in shippingOptions"
                      :key="item"
                      :label="item"
                      :value="item"
                      :class="textColor[index]"
                    />
                  </el-select>
                </template>
              </el-table-column>
              <el-table-column prop="receipt" label="明細"
                ><el-link @click="receiptVisible = true"
                  ><el-icon style="font-size: 28px"
                    ><Document /></el-icon></el-link
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
                  <el-col :class="titleClass" :span="4"
                    ><h3>訂單明細</h3></el-col
                  >
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
      </el-tab-pane>
      <el-tab-pane name="newproduct">
        <template #label>
          <span class="tabs-label">新增商品</span>
        </template>
        <el-row class="newProduct-row">
          <el-col>
            <el-row>
              <el-col :span="4" :offset="2" class="newProduct-title"> <h3>名稱</h3></el-col>
              <el-col :span="18"
                ><el-input v-model="inputName"></el-input
              ></el-col>
              <el-col :span="4" :offset="2" class="newProduct-title"><h3>價格</h3></el-col>
              <el-col :span="18"
                ><el-input v-model="inputPrice"></el-input
              ></el-col>
              <el-col :span="4" :offset="2" class="newProduct-title"><h3>庫存</h3></el-col>
              <el-col :span="18"
                ><el-input v-model="inputStock"></el-input
              ></el-col>
              <el-col :span="4" :offset="2" class="newProduct-title"><h3>介紹</h3></el-col>
              <el-col :span="18"
                ><el-input
                  v-model="inputIntroduce"
                  :autosize="{ minRows: 2 }"
                  type="textarea"
                ></el-input
              ></el-col>
              <el-col :span="4" :offset="2" class="newProduct-title"><h3>圖片</h3></el-col>
              <el-col :span="18">
                <el-upload
                  class="avatar-uploader"
                  :http-request="uploadSumbit"
                  multiple
                  list-type="picture-card"
                  v-model:file-list="files"
                  :on-change="handleChange"
                >
                  <template #trigger>
                    <img v-if="imageUrl" :src="imageUrl" class="avatar" />
                    <el-icon v-else class="avatar-uploader-icon"
                      ><Plus
                    /></el-icon>
                  </template>
                </el-upload>
              </el-col>

              <el-col class="updateButtonCol">
                <el-button @click="console.log(files)" class="updateButton"
                  >上傳</el-button
                >
              </el-col>
            </el-row>
          </el-col>
        </el-row>
      </el-tab-pane>
    </el-tabs>

    <!-- <el-row class="manage-row">
    <el-col class="manage-header">
      <span>訂單管理</span>
    </el-col>

    <el-col class="manage-main">
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
              <el-button
                @click="scope.row.payStatus = !scope.row.payStatus"
                :style="{
                  backgroundColor: scope.row.payStatus
                    ? '#84d2ca'
                    : '#eb2322',
                }"
              >
                <span v-if="scope.row.payStatus">已付款</span>
                <span v-else>未付款</span>
              </el-button>
            </div></template
          >
        </el-table-column>
        <el-table-column label="出貨狀態">
          <template #default="scope">
            <el-select v-model="scope.row.shippingStatus">
              <el-option
                v-for="(item, index) in shippingOptions"
                :key="item"
                :label="item"
                :value="item"
                :class="textColor[index]"
              />
            </el-select>
          </template>
        </el-table-column>
        <el-table-column prop="receipt" label="明細"
          ><el-link @click="receiptVisible = true"
            ><el-icon><Document /></el-icon></el-link
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
  </el-row> -->
  </el-container>
</template>
<style scoped>
.el-container {
  display: flex;
  justify-content: center;
}
.el-tabs {
  width: 80%;
  background-color: #fff;
  margin: 5% 0;
  padding: 2%;
}
.tabs-label {
  font: 400 24px Helvetica;
  margin: 0 10px;
}
.el-button {
  font: 700 14px Helvetica;
  color: black;
}
.el-button:hover {
  font: 700 14px Helvetica;
  color: black;
}
.newProduct-row .el-col {
  display: flex;
  justify-content: start;
  align-items: center;
  margin-bottom: 20px;
}
.newProduct-row .el-col .newProduct-title{
  justify-content: center;
}
.newProduct-row .el-input,
.el-textarea {
  width: 50%;
}

.avatar-uploader{
  padding: 20px 0;
}

.newProduct-row .updateButtonCol {
  justify-content: center;
  margin: 30px 0;
}
.newProduct-row .updateButtonCol .updateButton {
  background-color: aquamarine;
  color: #000;
  font: 700 18px Helvetica;
  border-radius: 10px;
  box-shadow: 0px 0px 10px #000;
  padding: 20px;
}
@media (max-width: 772px) {
  .newProduct-row .el-col {
    justify-content: center;
  }
  .newProduct-row .el-input,
  .el-textarea {
    width: 60%;
  }
}

/*
.manage-row {
  width: 100%;
  background-color: #fff;
  margin: 5% 0;
  padding: 2%;
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
.el-button {
  font: 700 14px Helvetica;
  color: black;
}
.el-button:hover {
  font: 700 14px Helvetica;
  color: black;
}
} */
</style>
