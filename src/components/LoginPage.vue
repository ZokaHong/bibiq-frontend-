<script setup>
import { ref } from "vue";
import { UserFilled } from "@element-plus/icons-vue";

const searchInput = ref("");

const inputAccount = ref("");
const inputPassword = ref("");
</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <el-row class="nav-box" :gutter="20">
          <el-col :span="2"
            ><div class="grid-content">
              <img class="logo" src="../assets/vue.svg" alt="" />
            </div>
          </el-col>
          <el-col :span="4"
            ><div class="grid-content">
              <h2>bibi-Q</h2>
            </div>
          </el-col>

          <el-col :span="4" :offset="6"
            ><div class="grid-content">
              <el-input
                v-model="searchInput"
                style="width: 100px"
                placeholder="Search"
              />
              <el-button style="width: 30px; margin-left: 10px">
                <el-icon size="20px"><Search /></el-icon>
              </el-button>
            </div>
          </el-col>
          <el-col :span="2">
            <el-button style="width: 30px">
              <el-icon size="24px"><ShoppingCart /></el-icon>
            </el-button>
          </el-col>
          <el-col :span="3">
            <el-button style="width: 120px">
              <el-avatar
                :icon="UserFilled"
                style="width: 25px; height: 25px; margin-right: 10px"
              />
              <span>登入/註冊</span>
            </el-button>
          </el-col>
          <el-col :span="3">
            <el-menu
              class="el-menu-globel"
              mode="horizontal"
              style="
                background-color: rgb(155, 71, 71);
                border-bottom: 3px solid #000000;
              "
            >
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
            </el-menu>
          </el-col>
        </el-row>
      </el-header>
      <el-main>
        <el-row>
          <!-- :xs <768px
             :sm ≥768px
             :md ≥992px
             :lg ≥1200px
             :xl ≥1920px -->
          <el-col
            :xs="{ span: 24, offset: 0 }"
            :sm="{ span: 12, offset: 6 }"
            :md="{ span: 10, offset: 7 }"
            :lg="{ span: 6, offset: 9 }"
            :xl="{ span: 4, offset: 10 }"
            style="border: 1px #000 solid"
          >
            <el-row class="login-row-top" style="flex-direction: column">
              <el-col
                :xs="{ span: 16, offset: 4 }"
                :sm="{ span: 14, offset: 5 }"
                :md="{ span: 14, offset: 5 }"
                :lg="{ span: 16, offset: 4 }"
                :xl="{ span: 16, offset: 4 }"
                style="text-align: start"
              >
                <span class="loginText">登入 Login</span>
              </el-col>
              <el-col
                :xs="{ span: 16, offset: 4 }"
                :sm="{ span: 14, offset: 5 }"
                :md="{ span: 14, offset: 5 }"
                :lg="{ span: 16, offset: 4 }"
                :xl="{ span: 16, offset: 4 }"
              >
                <el-input
                  v-model="inputAccount"
                  type="text"
                  onkeyup="value=value.replace(/[\W]/g,'') "
                  placeholder="帳號"
                  clearable
                />
              </el-col>
              <el-col
                :xs="{ span: 16, offset: 4 }"
                :sm="{ span: 14, offset: 5 }"
                :md="{ span: 14, offset: 5 }"
                :lg="{ span: 16, offset: 4 }"
                :xl="{ span: 16, offset: 4 }"
              >
                <el-input
                  v-model="inputPassword"
                  type="password"
                  placeholder="密碼"
                  clearable
                  show-password
                />
              </el-col>
              <el-col
                :xs="{ span: 16, offset: 4 }"
                :sm="{ span: 14, offset: 5 }"
                :md="{ span: 14, offset: 5 }"
                :lg="{ span: 16, offset: 4 }"
                :xl="{ span: 16, offset: 4 }"
              >
                <el-button class="loginButton" size="default">登入</el-button>
              </el-col>
              <el-col
                :xs="{ span: 16, offset: 4 }"
                :sm="{ span: 14, offset: 5 }"
                :md="{ span: 14, offset: 5 }"
                :lg="{ span: 16, offset: 4 }"
                :xl="{ span: 16, offset: 4 }"
                style="text-align: end"
              >
                <el-button class="forgetherPasswordButtton" size="small"
                  >忘記密碼?</el-button
                >
              </el-col>
            </el-row>
          </el-col>

          <el-col
            :xs="{ span: 24, offset: 0 }"
            :sm="{ span: 12, offset: 6 }"
            :md="{ span: 10, offset: 7 }"
            :lg="{ span: 6, offset: 9 }"
            :xl="{ span: 4, offset: 10 }"
            style="border: 1px #000 solid"
          >
            <el-row class="login-row-bottom" style="flex-direction: column">
              <el-col
                :xs="{ span: 16, offset: 4 }"
                :sm="{ span: 14, offset: 5 }"
                :md="{ span: 14, offset: 5 }"
                :lg="{ span: 16, offset: 4 }"
                :xl="{ span: 16, offset: 4 }"
              >
                <el-col>
                  <el-button class="loginButton" size="default"
                    >創建帳號</el-button
                  >
                </el-col>
              </el-col>
              <el-col
                :xs="{ span: 16, offset: 4 }"
                :sm="{ span: 14, offset: 5 }"
                :md="{ span: 14, offset: 5 }"
                :lg="{ span: 16, offset: 4 }"
                :xl="{ span: 16, offset: 4 }"
              >
                <el-row :gutter="20">
                  <el-col>
                    <span class="ortherLoginText">其他方式登入</span>
                  </el-col>
                  <el-col :xs="24" :md="12" :offset="0">
                    <el-button class="ortherLoginButton" style="width: 100%">
                      Google
                    </el-button>
                  </el-col>
                  <el-col :xs="24" :md="12" :offset="0">
                    <el-button class="ortherLoginButton" style="width: 100%">
                      Facebook
                    </el-button>
                  </el-col>
                </el-row>
              </el-col>
            </el-row>
          </el-col>
        </el-row>
      </el-main>

      <!-- <el-footer> footer </el-footer> -->
    </el-container>
  </div>
</template>

<style scoped>
.el-header {
  background-color: rgb(155, 71, 71);
  border-bottom: 3px solid #000000;
}
.nav-box {
  height: 100%;
  align-items: center;
}
.logo {
  width: 40px;
}
.grid-content {
  height: 60px;
  display: flex;
  align-items: center;
}
.el-main {
  background-color: rgb(240, 248, 255);
  margin-bottom: 100px;
}
.el-main .el-col {
  background-color: aliceblue;
  color: black;
  padding: 10px 0;
  user-select: none;
}

.el-main .loginText {
  font: 700 20px Helvetica;
}

.el-main .el-button {
  width: 60%;
}
.el-main .el-input {
  font: 400 16px Helvetica;
}
.el-main .forgetherPasswordButtton {
  font: 400 14px Helvetica;
  width: 40%;
}
.el-main .loginButton,
.el-main .ortherLoginButton {
  font: 700 20px Helvetica;
}

@media (max-width: 576px) {
  .el-main .loginText {
    font: 700 18px Helvetica;
  }
}

.el-main .ortherLoginText::before {
  content: "";
  display: inline-block;
  vertical-align: middle;
  background-color: #000304;
  width: 22%;
  height: 2px;
}
.el-main .ortherLoginText::after {
  content: "";
  display: inline-block;
  vertical-align: middle;
  background-color: #000304;
  width: 22%;
  height: 2px;
}

.el-footer {
  background-color: blue;
}
</style>
