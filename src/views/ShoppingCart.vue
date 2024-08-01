<script setup>
import { onMounted, ref } from "vue";
import { getApi, postApi, deleteApi } from "../api/index";
import { ElMessage } from "element-plus";
import { useRouter } from "vue-router";
const router = useRouter()
const apiNames = {
  shopping_cart: `/shopping_cart`,
  shopping_cart_id: (index) => `/shopping_cart/${index}`,
};

const getData = JSON.parse(localStorage.getItem("shopping_cart"));

const token = localStorage.getItem("token");
const data = ref([
  {
    product_id: "",
    quantity: "",
  },
]);

const selectAll = ref(false);

const selectAllEvent = () => {
  const allSelected = data.value.every((item) => item.select === true);
  data.value.forEach((item) => {
    item.select = !allSelected;
  });
};

const toggleChecked = (index) => {
  data.value[index].select = !data.value[index].select;
};

const shoppingCartList = ref({
  file_path: "",
  id: "",
  introduce: "",
  name: "",
  price: "",
  stock: "9",
});

const message = ref({
  message: "",
  type: "",
  plain: true,
  offset: 85,
  duration: 1500,
});
const params = ref({
  page: 1,
  page_size: 20,
});

onMounted(() => {
  // getApi(apiNames.shopping_cart, params.value, {
  //   Authorization: `Bearer ${token}`,
  // }).then((response) => {
  //   console.log(response);
  // });

  data.value = getData.map((item) => ({ ...item, select: false }));
  console.log(data.value);
});

const goToHomePage = ()=>{
  router.push("/")
}


let getShoppingCart = null;

getShoppingCart = JSON.parse(localStorage.getItem("shopping_cart"));

const deleteItem = (index) => {
  if (getShoppingCart) {
    console.log(getShoppingCart[index].product_id);
    const deletedShoppingCart = getShoppingCart.filter(
      (item, idx) => idx != index
    );
    console.log(deletedShoppingCart);
    localStorage.setItem("shopping_cart", JSON.stringify(deletedShoppingCart));
    data.value = deletedShoppingCart
    if(deletedShoppingCart.length === 0){
      localStorage.removeItem("shopping_cart");
    }

    // deleteApi(apiNames.shopping_cart_id(index), data);
  }
};

const buyEvent = () => {
  postApi(apiNames.shopping_cart, data.value, {
    Authorization: `Bearer ${token}`,
  }).then((response) => {
    console.log(response);
  });
};
</script>
<template>
  <el-container>
    <el-row class="shoppingCart-row">
      <el-col :span="24" class="shoppingCart-header">
        <el-link :underline="false" @click="goToHomePage">
          <el-icon><Back /></el-icon>
        </el-link>
        <span style="margin-left: 20px">購物車</span>
      </el-col>
      <el-divider />
      <el-col :span="24" class="shoppingCart-main">
        <el-row
          class="shoppingList"
          :class="{ active: item.select }"
          v-for="(item, index) in data"
          :key="index"
        >
          <el-col
            :xs="3"
            :sm="3"
            style="display: flex; justify-content: center; align-items: center"
          >
            <!-- <el-checkbox
              v-model="item.select"
              size="large"
              style="width: 20px"
            /> -->
            <el-button
              class="checkbox-button-default"
              :class="{ 'checkbox-button': item.select }"
              @click="toggleChecked(index)"
            ></el-button>
          </el-col>
          <el-col :xs="10" :sm="6">
            <el-image :src="shoppingCartList.file_path" class="item-img" />
          </el-col>

          <el-col
            :xs="10"
            :sm="4"
            style="padding: 40px 20px; font: 600 24px ''"
          >
            {{ shoppingCartList.name }}
          </el-col>
          <el-col
            :xs="12"
            :sm="4"
            style="padding: 40px 20px; font: 600 24px ''"
          >
            $ {{ shoppingCartList.price }}
          </el-col>
          <el-col
            :xs="12"
            :sm="6"
            style="padding: 40px 20px; font: 600 24px ''"
          >
            <el-button
              class="countButton"
              @click="
                item.quantity =
                  item.quantity > 1
                    ? parseInt(item.quantity) - 1
                    : item.quantity
              "
              ><span>-</span></el-button
            >

            <span style="margin: 0 15px">{{ item.quantity }}</span>

            <el-button
              class="countButton"
              @click="
                item.quantity =
                  item.quantity < shoppingCartList.stock
                    ? parseInt(item.quantity) + 1
                    : shoppingCartList.stock
              "
              ><span>+</span></el-button
            >
          </el-col>

          <el-col class="delCol">
            <el-link :underline="false" @click="deleteItem(index)">
              <el-icon style="font-size: 28px"><CloseBold /></el-icon>
            </el-link>
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="24" class="shoppingCart-footer">
        <el-row>
          <el-col :xs="{ span: 8, offset: 0 }" :span="8" :offset="4">
            <el-row>
              <!-- <el-col :span="6" style="padding: 20px; font: 600 24px ''">
                <el-checkbox v-model="selectAll" size="large" style="width: 20px"/>
              </el-col> -->
              <el-col :span="12" class="footer-items">
                <el-button
                  class="selectAll-button"
                  v-model="selectAll"
                  @click="selectAllEvent"
                  >全選
                </el-button>
              </el-col>
            </el-row>
          </el-col>
          <el-col :xs="8" :span="6" class="footer-items">
            <span>$ {{ shoppingCartList.price * data.quantity }}</span>
          </el-col>
          <el-col :xs="8" :span="6" class="footer-items">
            <el-button @click="buyEvent" class="buyEvent-button"
              >買單</el-button
            >
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </el-container>
</template>
<style scoped>
.checkbox-button-default {
  box-sizing: content-box;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  padding: 0;
  background-color: #ececec;
  transition: background-color 0.3s;
}
.checkbox-button {
  background-color: black;
}
.checkbox-button::after {
  content: "✔";
  color: #fff;
  font-size: 18px;
}
.selectAll-button {
  box-sizing: content-box;
  padding: 6px 15px;
  color: black;
  font: 600 24px "";
}
.buyEvent-button {
  box-sizing: content-box;
  padding: 6px 15px;
  color: black;
  font: 600 24px "";
}

.el-container {
  display: flex;
  justify-content: center;
}
.shoppingCart-row {
  width: 80%;
  background-color: #fff;
  margin: 5% 0;
  padding: 2%;
  position: relative;
  padding-bottom: 120px;
}
.shoppingCart-header {
  display: flex;
  justify-content: start;
  align-content: center;
  font: 400 28px Helvetica;
  padding: 5px 10px;
}
.shoppingCart-header .el-icon {
  font-size: 30px;
}
.item-img {
  width: 150px;
  height: 150px;
  border: 1px inset #000;
}
.countButton {
  padding: 6px 10px;
}
.countButton span {
  width: 10px;
}
.shoppingCart-main {
  padding: 20px 0;
}
.shoppingList {
  padding: 20px 0;
  margin-bottom: 20px;
  transition: background-color 0.8s, border 0.8s;
  border: 2px outset transparent;
}
.active {
  background-color: rgba(250, 204, 204, 0.8);
  border: 2px outset #353535;
}
.delCol {
  position: absolute;
  top: 10px;
  right: 10px;
}

.shoppingCart-footer {
  background-color: #96e7c1;
  border: 2px solid #353535;
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
}
.footer-items {
  text-align: center;
  margin-top: auto;
  margin-bottom: auto;
  padding: 20px;
  font: 600 24px "";
}

@media (max-width: 772px) {
  .shoppingCart-header {
    font: 400 24px Helvetica;
    padding: 10px;
  }
  .shoppingCart-header .el-icon {
    font-size: 24px;
  }

  .item-img {
    width: 100px;
    height: 100px;
  }
  .countButton {
    padding: 2px 8px;
  }
  .footer-items {
    font: 600 20px "";
  }
  .selectAll-button {
    padding: 3px 10px;
    font: 600 20px "";
  }
  .buyEvent-button {
    padding: 3px 10px;
    font: 600 20px "";
  }
}
</style>
