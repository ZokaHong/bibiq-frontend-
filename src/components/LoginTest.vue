<script setup>
import { ref } from "vue";
const inputAccount = ref("");
const inputPassword = ref("");
</script>

<template>
  <el-container direction="vertical">
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
  </el-container>
</template>
<style scoped>
.el-col {
  background-color: aliceblue;
  color: black;
  padding: 10px 0;
  user-select: none;
}

.loginText {
  font: 700 20px Helvetica;
}

.el-button {
  width: 60%;
}
.el-input {
  font: 400 16px Helvetica;
}
.forgetherPasswordButtton {
  font: 400 14px Helvetica;
  width: 40%;
}
.loginButton,
.ortherLoginButton {
  font: 700 20px Helvetica;
}

@media (max-width: 576px) {
  .loginText {
    font: 700 18px Helvetica;
  }
}

.ortherLoginText::before {
  content: "";
  display: inline-block;
  vertical-align: middle;
  background-color: #000304;
  width: 22%;
  height: 2px;
}
.ortherLoginText::after {
  content: "";
  display: inline-block;
  vertical-align: middle;
  background-color: #000304;
  width: 22%;
  height: 2px;
}
</style>
