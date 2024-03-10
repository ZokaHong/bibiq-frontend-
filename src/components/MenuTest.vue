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
</script>
<template>
  <!-- <el-menu class="el-menu-globel" mode="horizontal">
    <el-sub-menu index="0">
      <template #title>
        <img
          src="../assets/globe-icon-96x96-6gmgebx3.png"
          width="25px"
          alt=""
        />
        <span style="margin: 0 10px 0 20px">繁體中文</span>
      </template>
      <el-menu-item index="0-1">繁體中文</el-menu-item>
      <el-menu-item index="0-2">简体中文</el-menu-item>
      <el-menu-item index="0-3">English</el-menu-item>
      <el-menu-item index="0-4">日本語</el-menu-item>
    </el-sub-menu>
  </el-menu> -->

  <el-container>
    <el-header>
      <el-row class="nav-box" :gutter="20">
        <el-col :span="2"
          ><div class="grid-content">
            <img class="logo" src="../assets/vue.svg" alt="" />
          </div>
        </el-col>
        <el-col :xs="{ span: 8, offset: 4 }" :span="4"
          ><div class="grid-content">
            <h2>bibi-Q</h2>
          </div>
        </el-col>
        <el-col :xs="0" :span="12" :offset="6">
          <el-row class="toolsMenu">
            <el-col :span="8"
              ><div class="grid-content">
                <el-input
                  type="text"
                  v-model="searchInput"
                  style="width: 100px"
                  placeholder="Search"
                />
                <el-button style="width: 30px; margin-left: 10px">
                  <el-icon size="20px"><Search /></el-icon>
                </el-button>
              </div>
            </el-col>
            <el-col :span="4">
              <el-button style="width: 30px">
                <el-icon size="24px"><ShoppingCart /></el-icon>
              </el-button>
            </el-col>
            <el-col :span="5">
              <el-button style="width: 120px">
                <el-avatar
                  :icon="UserFilled"
                  style="width: 25px; height: 25px; margin-right: 10px"
                />
                <span>登入/註冊</span>
              </el-button>
            </el-col>
            <el-col :span="7">
              <el-dropdown trigger="click">
                <span style="width: 150px; display: flex; align-items: center">
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
        <el-col :xs="{ span: 4, offset: 6 }" :md="0">
          <el-dropdown trigger="click">
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
          </el-dropdown>
        </el-col>
      </el-row>
    </el-header>
  </el-container>
</template>
<style scoped>
.el-row {
  color: #000000;
}
.nav-box {
  align-items: center;
}
.toolsMenu {
  align-items: center;
}
</style>
