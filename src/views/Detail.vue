<script setup>
import { ref, onMounted, toRaw } from "vue";
import { useRoute, useRouter } from "vue-router";
const route = useRoute();
const routeId = parseInt(route.query.id);
const router = useRouter();

const isLoading = ref(false);

import { getApi, postApi } from "../api/index";
import { ElMessage } from "element-plus";

const apiNames = {
  product: `/product/${routeId}`,
  shopping_cart: `/shopping_cart`,
};
const token = localStorage.getItem("token");

const detailList = ref({
  file_path: "",
  id: "",
  introduce: "",
  name: "",
  price: "",
  stock: "",
});

const message = ref({
  message: "",
  type: "",
  plain: true,
  offset: 85,
  duration: 1500,
});

const shopping_cart = ref({
  product_id: "",
  quantity: "",
});

let getShoppingCart = null;
onMounted(() => {
  getShoppingCart = JSON.parse(localStorage.getItem("shopping_cart"));
  if (getShoppingCart) {
    console.log(getShoppingCart);
  }

  getApi(apiNames.product)
    .then((response) => {
      [detailList.value] = response.data.product;
      shopping_cart.value.product_id = response.data.product[0].id;
      isLoading.value = true;
    })
    .catch((error) => {
      console.error("失敗");
      isLoading.value = true;
    });
});

const addToShoppingCart = () => {
  let idExist = null
  if(getShoppingCart !== null){
    idExist = getShoppingCart.some(
      (item) => item.product_id === detailList.value.id
    );
    console.log(idExist);
  }

  if (shopping_cart.value.quantity === "") {
    message.value.message = "請選擇數量";
    message.value.type = "warning";
    return ElMessage(message.value);
  } else if (getShoppingCart !== null && !idExist) {
    console.log(toRaw(shopping_cart.value));
    getShoppingCart.push(toRaw(shopping_cart.value));
    console.log(getShoppingCart);
    localStorage.setItem("shopping_cart", JSON.stringify(getShoppingCart));
  } else if (getShoppingCart !== null && idExist) {
    for (let item of getShoppingCart) {
      if (item.product_id === shopping_cart.value.product_id) {
        item.quantity = shopping_cart.value.quantity;
        break;
      }
    }
    localStorage.setItem("shopping_cart", JSON.stringify(getShoppingCart));
  } else {
    localStorage.setItem(
      "shopping_cart",
      JSON.stringify([shopping_cart.value])
    );
    postApi(apiNames.shopping_cart, shopping_cart.value, {
      Authorization: `Bearer ${token}`,
    }).then((response) => {
      console.log(response);
    });
  }
};

const buyNowEvent = () => {
  addToShoppingCart();
  router.push("/shoppingcart");
};
function buyLaterEvent() {
  addToShoppingCart();

  message.value.message = "已成功加入購物車";
  message.value.type = "success";
  ElMessage(message.value);
}
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
                  v-model="shopping_cart.quantity"
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
                    >{{ detailList.price * shopping_cart.quantity }}</span
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
            ><el-button type="primary" @click="buyLaterEvent()"
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
