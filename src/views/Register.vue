<script setup>
import { ref } from "vue";
const registerAccount = ref("");
const registerPassword = ref("");
const registerMail = ref("");
const registerPhone = ref("");
import { useRouter } from "vue-router";
const router = useRouter();
const toLogin = () => {
  router.push("/login");
};
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
            <!-- <el-col
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
            /></el-col> -->
            <el-col class="registerButtonCol">
              <el-button class="registerButton">註冊</el-button>
            </el-col>
            <el-divider />
            <el-col class="returnButtonCol">
              <el-button class="returnButton" @click="toLogin"
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
  margin-top: 5%;
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
.registerTextCol {
  margin-bottom: 20px;
  border-bottom: 1px solid #000;
}
.registerText {
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
.registerButtonCol {
  margin-top: 20px;
}
.returnButtonCol {
  margin-bottom: 20px;
}
.registerButton,
.returnButton {
  font: 700 20px Helvetica;
  width: 40%;
}
.registerButton {
  background-color: rgba(231, 130, 71, 0.6);
}
</style>
