<script setup>
import { ref } from "vue";
const inputAccount = ref("");
const inputPassword = ref("");
const registerAccount = ref("");
const registerPassword = ref("");
const registerMail = ref("");
const registerPhone = ref("");
const activeLogin = ref("login");
</script>

<template>
  <el-container direction="vertical">
    <el-main>
      <!-- 登入註冊tabs -->
      <el-tabs v-model="activeLogin" class="activeLogin">
        <el-tab-pane name="login">
          <template #label
            ><span><h2>登入 Login</h2></span></template
          >
          <el-row>
            <el-col>
              <el-input
                v-model="inputAccount"
                type="text"
                onkeyup="value=value.replace(/[\W]/g,'') "
                placeholder="帳號"
                clearable
              />
            </el-col>
            <el-col>
              <el-input
                v-model="inputPassword"
                type="password"
                placeholder="密碼"
                onkeyup="value=value.replace(/[\W]/g,'') "
                clearable
                show-password
              />
            </el-col>
            <el-col>
              <el-button class="loginButton" size="default">登入</el-button>
            </el-col>
            <el-col style="text-align: end">
              <el-button
                class="forgetherPasswordButtton"
                style="
                  background-color: rgba(164, 58, 137, 0.1);
                  border: 1px solid rgba(170, 60, 138, 1);
                "
                >忘記密碼?</el-button
              >
            </el-col>
          </el-row>
          <el-divider />
          <el-row>
            <el-col>
              <el-row :gutter="20">
                <el-col>
                  <span class="ortherLoginText">其他方式登入</span>
                </el-col>
                <el-col :xs="24" :md="12" :offset="0">
                  <el-button class="ortherLoginButton"> Google </el-button>
                </el-col>
                <el-col :xs="24" :md="12" :offset="0">
                  <el-button class="ortherLoginButton"> Facebook </el-button>
                </el-col>
              </el-row>
            </el-col>
          </el-row>
        </el-tab-pane>
        <el-tab-pane name="register">
          <template #label
            ><span><h2>註冊 Register</h2></span></template
          >
          <el-row>
            <el-col>
              <el-input
                v-model="registerAccount"
                type="text"
                onkeyup="value=value.replace(/[\W]/g,'') "
                placeholder="帳號"
                clearable
              />
            </el-col>
            <el-col>
              <el-input
                v-model="registerPassword"
                type="password"
                placeholder="密碼"
                onkeyup="value=value.replace(/[\W]/g,'') "
                clearable
                show-password
              />
            </el-col>
            <el-col
              ><el-input
                v-model="registerMail"
                type="text"
                placeholder="電子郵件"
                clearable
              />
            </el-col>
            <el-col
              ><el-input
                v-model="registerPhone"
                type="text"
                placeholder="手機號碼"
                clearable
            /></el-col>
            <el-col>
              <el-button class="loginButton" size="default">註冊</el-button>
            </el-col>
          </el-row>
        </el-tab-pane>
      </el-tabs>
    </el-main>
  </el-container>
</template>
<style scoped>
.el-row {
  border-radius: 20px;
}
.el-col {
  color: black;
  padding: 10px 0;
  user-select: none;
}

.loginCol,
.registerCol {
  background-color: rgba(255, 255, 255, 0.9);
  border: 2px solid rgba(75, 82, 96, 0.3);
  padding: 20px 40px;
  border-radius: 10px;
}
.loginText,
.registerText {
  font: 700 20px Helvetica;
}

.el-button {
  width: 100%;
  background-color: rgba(109, 179, 175, 0.4);
  border: 2px solid rgba(75, 82, 96, 0.3);
  color: rgba(23, 20, 19, 0.8);
}

.el-input {
  font: 400 14px Helvetica;
}

.forgetherPasswordButtton {
  font: 600 14px Helvetica;
  width: 30%;
}

.loginButton {
  font: 700 20px Helvetica;
  width: 50%;
}
.ortherLoginButton {
  font: 700 20px Helvetica;
  width: 100%;
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

.activeLogin {
  width: 280px;
  height: 480px;
  background-color: rgba(255, 255, 255, 0.9);
  border: 2px solid rgba(75, 82, 96, 0.3);
  padding: 20px 40px;
  border-radius: 10px;
  margin: 0 auto;
}
</style>
