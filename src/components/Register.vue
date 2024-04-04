<script setup>
import { ref } from "vue";
const registerAccount = ref("");
const registerPassword = ref("");
const registerMail = ref("");
const registerPhone = ref("");
</script>

<template>
  <el-container direction="vertical">
    <el-main>
      <el-row>
        <el-col class="defaultCol" :span="8" :xs="0" :sm="6" :md="8"></el-col>

        <!-- 註冊col -->
        <el-col
          class="registerCol"
          :xs="{ span: 24, offset: 0 }"
          :sm="{ span: 12, offset: 0 }"
          :md="{ span: 6, offset: 1 }"
          :span="6"
          :offset="1"
        >
          <el-row>
            <el-col class="registerTextCol" style="text-align: start">
              <span class="registerText">註冊 Register</span>
            </el-col>
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
            <el-divider />
            <el-col>
              <el-button class="returnButton" size="default"
                >返回登入</el-button
              >
            </el-col>
          </el-row>
        </el-col>
      </el-row>
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

.registerCol {
  background-color: rgba(255, 255, 255, 0.9);
  border: 2px solid rgba(75, 82, 96, 0.3);
  padding: 20px 40px;
  border-radius: 10px;
}
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

.returnButton {
  font: 700 20px Helvetica;
  width: 50%;
}
</style>
