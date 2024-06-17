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

const imageUrl = "";

const fileList = ref([]);

const activePage = ref("manage");

import { postApi } from "../api/index";

const apiNames = {
  product: "/product",
};
const data = ref({
  introduce: "",
  name: "",
  price: "",
  stock: "",
  file: "",
});
const uploadSumbit = (options) => {
  data.value.file = options.file;
};

import { ElMessage } from "element-plus";
const showMessage = (message, type) => {
  ElMessage({
    message: message,
    type: type,
    offset: 100,
  });
};

const uploadExceed = () => {
  showMessage("只能上傳一張圖片", "error");
};
const beforeUpload = (file) => {
  const isImage = file.type === "image/jpeg" || file.type === "image/png";
  const sizeLess10M = file.size / 1024 / 1024 < 10;
  if (isImage && sizeLess10M) {
    showMessage("上傳成功", "success");
  } else if (!isImage) {
    showMessage("上傳失敗，只能是Jpeg/Png格式", "error");
  } else if (!sizeLess10M) {
    showMessage(`上傳失敗，檔案限制小於10M`, "error");
  } else {
    showMessage(`上傳失敗，只能是Jpeg/Png格式且檔案限制小於10M`, "error");
  }
  return isImage && sizeLess10M;
};

const uploadEvent = async () => {
  console.log(data.value);
  const { name, price, introduce, stock, file } = data.value;
  const formData = new FormData();
  formData.append("name", name);
  formData.append("price", price);
  formData.append("introduce", introduce);
  formData.append("stock", stock);
  formData.append("file", file);

  const res = await postApi(apiNames.product, formData, {
    headers: { "Content-type": "multipart/form-data" },
  });
  console.log(res);
};
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
              <el-col :span="4" :offset="2" class="newProduct-title">
                <h3>名稱</h3></el-col
              >
              <el-col :span="18"
                ><el-input v-model="data.name"></el-input
              ></el-col>
              <el-col :span="4" :offset="2" class="newProduct-title"
                ><h3>價格</h3></el-col
              >
              <el-col :span="18"
                ><el-input v-model="data.price"></el-input
              ></el-col>
              <el-col :span="4" :offset="2" class="newProduct-title"
                ><h3>庫存</h3></el-col
              >
              <el-col :span="18"
                ><el-input v-model="data.stock"></el-input
              ></el-col>
              <el-col :span="4" :offset="2" class="newProduct-title"
                ><h3>介紹</h3></el-col
              >
              <el-col :span="18"
                ><el-input
                  v-model="data.introduce"
                  :autosize="{ minRows: 2 }"
                  type="textarea"
                ></el-input
              ></el-col>
              <el-col :span="4" :offset="2" class="newProduct-title"
                ><h3>圖片</h3></el-col
              >
              <el-col :span="18">
                <el-upload
                  class="image-uploader"
                  :http-request="uploadSumbit"
                  :limit="1"
                  list-type="picture-card"
                  v-model:file-list="fileList"
                  :on-exceed="uploadExceed"
                  accept="image/png,image/jpeg"
                  :before-upload="beforeUpload"
                >
                  <template #trigger>
                    <img v-if="imageUrl" :src="imageUrl" class="image" />
                    <el-icon v-else class="image-uploader-icon"
                      ><Plus
                    /></el-icon>
                  </template>
                </el-upload>
              </el-col>

              <el-col class="uploadButtonCol">
                <el-button @click="uploadEvent" class="uploadButton"
                  >上傳</el-button
                >
              </el-col>
            </el-row>
          </el-col>
        </el-row>
      </el-tab-pane>
    </el-tabs>
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
::v-deep .el-tabs__nav {
  padding: 10px 20px;
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
.newProduct-row .el-col .newProduct-title {
  justify-content: center;
}
.newProduct-row .el-input,
.el-textarea {
  width: 50%;
}

.image-uploader {
  padding: 20px 0;
}

.newProduct-row .uploadButtonCol {
  justify-content: center;
  margin: 30px 0;
}
.newProduct-row .uploadButtonCol .uploadButton {
  background-color: aquamarine;
  color: #000;
  font: 700 18px Helvetica;
  border-radius: 10px;
  box-shadow: 0 0 10px #9c9c9c;
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
</style>
