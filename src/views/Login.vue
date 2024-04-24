<script setup>
import { ref } from "vue";
const inputAccount = ref("");
const inputPassword = ref("");
const registerAccount = ref("");
const registerPassword = ref("");
import { useRouter } from "vue-router";
const router = useRouter();
const toRegister = () => {
  router.push("/register");
};
import { postApi } from "../api/index";
const apiNames = {
  login: "/user/login",
};
const data = {
  account: "kinnaroot",
  password: "kinnaroot",
};
const loginEvent = () => {
  postApi(apiNames.login, data)
    .then((response) => {
      localStorage.setItem("token", response.data.token);
    })
    .catch((error) => {
      console.error(error.response.data.error);
    });
};
</script>

<template>
  <el-container direction="vertical">
    <el-main>
      <el-row>
        <el-col class="defaultCol" :span="8" :xs="0" :sm="6" :md="8"></el-col>
        <!-- 登入col -->
        <el-col
          class="loginCol"
          :xs="{ span: 24, offset: 0 }"
          :sm="{ span: 12, offset: 0 }"
          :md="{ span: 6, offset: 1 }"
          :span="6"
          :offset="1"
        >
          <!-- 登入col上半部 -->
          <el-row>
            <el-col class="loginTextCol" style="text-align: start">
              <span class="loginText">登入 Login</span>
            </el-col>
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
            <el-col class="loginButtonCol">
              <el-button class="loginButton" @click="loginEvent"
                >登入</el-button
              >
            </el-col>
            <!-- <el-col style="text-align: end">
              <el-button
                class="forgetherPasswordButtton"
                style="
                  background-color: rgba(164, 58, 137, 0.1);
                  border: 1px solid rgba(170, 60, 138, 1);
                "
                >忘記密碼?</el-button
              >
            </el-col> -->
          </el-row>
          <el-divider />
          <!-- 登入col下半部 -->
          <el-row>
            <el-col class="createAccountButtonCol">
              <el-button class="createAccountButton" @click="toRegister"
                >創建帳號</el-button
              >
            </el-col>
            <!-- <el-col>
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
            </el-col> -->
          </el-row>
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>
<style scoped>
.el-row {
  border-radius: 20px;
  margin-top: 5%;
}
.el-col {
  color: black;
  padding: 10px 0;
  user-select: none;
}

.loginCol {
  background-color: rgba(255, 255, 255, 0.9);
  border: 2px solid rgba(75, 82, 96, 0.3);
  padding: 20px 40px;
  border-radius: 10px;
}
.loginTextCol {
  margin-bottom: 20px;
  border-bottom: 1px solid #000;
}
.loginText {
  font: 700 24px Helvetica;
}

.el-button {
  background-color: rgba(109, 179, 175, 0.4);
  border: 2px solid rgba(75, 82, 96, 0.3);
  color: #000;
  box-sizing: content-box;
  padding: 5px;
}

.el-input {
  font: 400 16px Helvetica;
}

/* .forgetherPasswordButtton {
  font: 600 14px Helvetica;
  width: 30%;
} */
.loginButtonCol {
  margin-top: 20px;
}
.createAccountButtonCol {
  margin-bottom: 20px;
}

.loginButton,
.createAccountButton {
  font: 700 20px Helvetica;
  width: 40%;
}
.loginButton {
  background-color: rgba(118, 235, 128, 0.6);
}
/* .ortherLoginButton {
  font: 700 24px Helvetica;
  width: 100%;
} */

/* 
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
} */
</style>
