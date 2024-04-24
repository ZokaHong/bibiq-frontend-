<script setup>
import { ref } from "vue";
import { Menu } from "@element-plus/icons-vue";
import { UserFilled } from "@element-plus/icons-vue";

const searchInput = ref("");

const inputAccount = ref("");
const inputPassword = ref("");
const language = ref("繁體中文");
const languageList = {
  language1: "繁體中文",
  language2: "简体中文",
  language3: "English",
  language4: "日本語",
};
function changeLanguage(item) {
  language.value = item;
}
const languageList1 = ref([
  { language: "繁體中文" },
  { language: "简体中文" },
  { language: "English" },
  { language: "日本語" },
]);
const drawer = ref(false);

import { useRouter } from "vue-router";
const router = useRouter();
const toHome = () => {
  router.push("/home");
};
const toShoppingCart = () => {
  router.push("/shoppingcart");
};
const toLogin = () => {
  router.push("/login");
};
const toManage = () => {
  router.push("/manage");
};
const toUser = () => {
  router.push("/user");
};
</script>
<template>
  <el-container>
    <el-header>
      <el-row class="nav-box">
        <el-col :xs="8" :span="4">
          <el-row @click="toHome()">
            <el-col :span="8" class="logo-col">
              <img class="logo" src="../assets/vue.svg" alt="" />
            </el-col>
            <el-col :span="16" class="title-col">
              <h3 style="user-select: none">bibi-Q</h3>
            </el-col>
          </el-row>
        </el-col>

        <el-col :xs="0" :span="14" :offset="6">
          <el-row class="toolsMenu">
            <el-col :span="7">
              <el-input
                type="text"
                v-model="searchInput"
                style="width: 60%"
                placeholder="Search"
              />
              <el-button style="width: 35px; margin-left: 10px" text>
                <el-icon size="25px"><Search /></el-icon>
              </el-button>
            </el-col>
            <el-col :span="2">
              <el-button style="width: 35px" text @click="toShoppingCart">
                <el-icon size="25px"><ShoppingCart /></el-icon>
              </el-button>
            </el-col>
            <el-col :span="4">
              <el-button style="width: 60%" text @click="toLogin">
                <!-- <el-avatar
                  :icon="UserFilled"
                  style="width: 25px; height: 25px; margin-right: 10px"
                /> -->
                <span>登入/註冊</span>
              </el-button>
            </el-col>
            <el-col :span="6">
              <el-button text @click="toUser">使用者</el-button>
              <el-button text @click="toManage">管理者</el-button>
            </el-col>
            <el-col :span="5">
              <el-dropdown trigger="click" class="dropdown-box">
                <div
                  style="display: flex; align-items: center; user-select: none"
                >
                  <img
                    src="../assets/globe-icon-96x96-6gmgebx3.png"
                    width="22px"
                    alt="globel"
                  />
                  <span style="margin-left: 10px">{{ language }}</span>
                </div>
                <template #dropdown>
                  <el-dropdown-menu>
                    <el-dropdown-item
                      v-for="item in languageList1"
                      @click="language = item.language"
                      >{{ item.language }}</el-dropdown-item
                    >
                  </el-dropdown-menu>
                </template>
              </el-dropdown>
            </el-col>
          </el-row>
        </el-col>

        <el-col :xs="{ span: 4, offset: 12 }" :sm="0">
          <div @click="drawer = true">
            <el-icon :size="30"><Menu /></el-icon>
          </div>
          <el-drawer v-model="drawer" size="75%">
            <template #header>
              <h3 style="text-align: left; margin: 20px">bibi-Q</h3>
            </template>

            <div class="search-input-rwd">
              <el-input
                type="text"
                v-model="searchInput"
                style="width: 50%"
                placeholder="Search"
              />
              <el-button style="width: 30px" text>
                <el-icon size="25px"><Search /></el-icon>
              </el-button>
            </div>
            <el-menu>
              <el-menu-item index="1" @click="toShoppingCart">
                <el-icon size="25px"><ShoppingCart /></el-icon>
                <span>查看購物車</span>
              </el-menu-item>
              <el-menu-item index="2" @click="toLogin">
                <el-avatar
                  :icon="UserFilled"
                  style="width: 25px; height: 25px"
                />
                <span>登入/註冊</span>
              </el-menu-item>
              <el-sub-menu index="3">
                <template #title>
                  <img
                    src="../assets/globe-icon-96x96-6gmgebx3.png"
                    width="25px"
                    alt=""
                  />
                  <span style="margin-left: auto; font: 400 24px Helvetica">{{
                    language
                  }}</span>
                </template>

                <el-menu-item
                  index="3-1"
                  @click="changeLanguage(languageList.language1)"
                >
                  繁體中文
                </el-menu-item>
                <el-menu-item
                  index="3-2"
                  @click="changeLanguage(languageList.language2)"
                >
                  简体中文
                </el-menu-item>
                <el-menu-item
                  index="3-3"
                  @click="changeLanguage(languageList.language3)"
                >
                  English
                </el-menu-item>
                <el-menu-item
                  index="3-4"
                  @click="changeLanguage(languageList.language4)"
                >
                  日本語
                </el-menu-item>
              </el-sub-menu>
            </el-menu>
          </el-drawer>
        </el-col>
      </el-row>
    </el-header>
  </el-container>
</template>
<style scoped>
.el-header {
  width: 100%;
  height: 100%;
  background-color: rgb(139, 197, 197);
}

.el-row {
  color: #000000;
}
.logo-col {
  display: flex;
  justify-content: center;
  align-items: center;
}
.logo-col .logo {
  width: 35px;
  height: 35px;
}
.title-col {
  text-align: start;
}
.nav-box {
  align-items: center;
}
.toolsMenu {
  align-items: center;
}
.dropdown-box {
  padding: 4px 10px;
}
.dropdown-box:hover {
  border-radius: 5px;
  background-color: rgba(255, 254, 254, 0.973);
}

.drawer-row .el-col {
  margin: 10px 0;
}
.search-input-rwd {
  display: flex;
  padding: 0 20px;
  justify-content: space-between;
  margin-bottom: 32px;
}

.el-menu-item {
  font: 400 24px Helvetica;
  justify-content: space-between;
}
.el-sub-menu template {
  justify-content: center;
}
.el-sub-menu .el-menu-item {
  justify-content: center;
}
</style>
