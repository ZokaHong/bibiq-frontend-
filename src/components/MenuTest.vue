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

const drawer = ref(false);
</script>
<template>
  <el-container>
    <el-header>
      <el-row class="nav-box" :gutter="10">
        <el-col :span="4"
          ><div class="grid-content">
            <img class="logo" src="../assets/vue.svg" alt="" />
          </div>
        </el-col>
        <el-col :xs="8" :span="3"
          ><div class="grid-content">
            <h3 style="user-select: none">bibi-Q</h3>
          </div>
        </el-col>
        <el-col :xs="0" :span="12" :offset="5">
          <el-row class="toolsMenu">
            <el-col :span="9"
              ><div class="grid-content">
                <el-input
                  type="text"
                  v-model="searchInput"
                  style="width: 70%"
                  placeholder="Search"
                />
                <el-button style="width: 30px; margin-left: 10px" text>
                  <el-icon size="25px" style="margin-left: 5px"
                    ><Search
                  /></el-icon>
                </el-button>
              </div>
            </el-col>
            <el-col :span="3">
              <div class="grid-content">
                <el-button style="width: 30px" text>
                  <el-icon size="25px"><ShoppingCart /></el-icon>
                </el-button>
              </div>
            </el-col>
            <el-col :span="5">
              <div class="grid-content">
                <el-button style="width: 100%" text>
                  <el-avatar
                    :icon="UserFilled"
                    style="width: 25px; height: 25px; margin-right: 10px"
                  />
                  <span>登入/註冊</span>
                </el-button>
              </div>
            </el-col>
            <el-col :span="7">
              <el-dropdown trigger="click" class="dropdown-box">
                <span
                  style="
                    width: 100%;
                    display: flex;
                    align-items: center;
                    user-select: none;
                  "
                >
                  <img
                    src="../assets/globe-icon-96x96-6gmgebx3.png"
                    width="25px"
                    alt=""
                  />
                  <span style="margin-left: 20px">{{ language }}</span>
                </span>
                <template #dropdown>
                  <el-dropdown-menu>
                    <el-dropdown-item @click="language = languageList.language1"
                      >繁體中文</el-dropdown-item
                    >
                    <el-dropdown-item @click="language = languageList.language2"
                      >简体中文</el-dropdown-item
                    >
                    <el-dropdown-item @click="language = languageList.language3"
                      >English</el-dropdown-item
                    >
                    <el-dropdown-item @click="language = languageList.language4"
                      >日本語</el-dropdown-item
                    >
                  </el-dropdown-menu>
                </template>
              </el-dropdown>
            </el-col>
          </el-row>
        </el-col>
        <el-col :xs="{ span: 4, offset: 8 }" :sm="0">
          <!-- <el-dropdown trigger="click">
            <el-icon :size="30"><Menu /></el-icon>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item>
                  <el-icon size="24px"><ShoppingCart /></el-icon>
                  <span>購物車</span>
                </el-dropdown-item>
                <el-dropdown-item>
                  <el-avatar
                    :icon="UserFilled"
                    style="width: 25px; height: 25px; margin-right: 10px"
                  />
                  <span>登入/註冊</span>
                </el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown> -->
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
              <el-menu-item index="1">
                <el-icon size="25px"><ShoppingCart /></el-icon>
                <span>查看購物車</span>
              </el-menu-item>
              <el-menu-item index="2">
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
  padding: 0;
}
.el-row {
  color: #000000;
}
.nav-box {
  align-items: center;
  background-color: rgb(139, 197, 197);
}
.toolsMenu {
  align-items: center;
}
.dropdown-box {
  padding: 4px 12px;
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
