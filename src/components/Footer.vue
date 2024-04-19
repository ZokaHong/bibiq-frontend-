<script setup>
import { ref } from "vue";
const socials = ref([
  { label: "1" },
  { label: "2" },
  { label: "3" },
  { label: "4" },
]);
</script>
<template>
  <el-container>
    <el-footer>
      <el-row class="footer-row">
        <el-link class="backBar" href="#" :underline="false">
          <span>回頁首</span>
        </el-link>
        <el-link class="backBarRwd" href="#" :underline="false">
          <span>
            <el-icon size="30px"><HomeFilled /></el-icon>
          </span>
        </el-link>
        <el-col :xs="12" :md="8" :span="8"><span>聯絡我們</span></el-col>
        <el-col :xs="12" :md="8" :span="8"><span>@ Copyright</span></el-col>
        <el-col :xs="24" :md="8" :span="8">
          <div
            style="
              display: flex;
              justify-content: center;
              position: relative;
              top: -5px;
            "
          >
            <el-link
              class="social-link"
              v-for="social in socials"
              type="info"
              :underline="false"
            >
              <span class="social"> {{ social.label }}</span>
            </el-link>
          </div>
        </el-col>
      </el-row>
    </el-footer>
  </el-container>
</template>
<style scoped>
.el-footer {
  width: 100%;
  height: 100px;
  background-color: rgba(109, 179, 175, 0.7);
  color: black;
  position: absolute;
  bottom: 0;
}
.el-row {
  height: 100%;
  align-items: center;
}
.footer-row {
  position: relative;
}
.backBar {
  display: flex;
  justify-content: center;
  align-items: end;
  width: 30%;
  height: 120%;
  color: black;
  background-color: rgba(109, 179, 175, 0.7);
  position: absolute;
  top: -120%;
  left: 35%;
  clip-path: ellipse(50% 50% at 50% 100%);
  z-index: 2;
}
.backBar span {
  letter-spacing: 5px;
  font: 700 24px Helvetica;
}
.backBar:hover {
  color: #ffffff;
}

.backBarRwd {
  width: 40px;
  height: 40px;
  border: 1px #000 solid;
  border-radius: 20%;
  position: absolute;
  top: -50px;
  right: 0;
}
.backBarRwd:hover {
  color: #000000;
  background-color: #f5c3c7;
}

.social {
  width: 25px;
  height: 25px;
  color: black;
  background-color: aliceblue;
  margin: 0 15px;
  transition: 0.5s;
  transform: rotate(-30deg) skewX(15deg);
}
.social::before {
  content: "";
  position: absolute;
  top: 100%;
  left: -25%;
  width: 100%;
  height: 50%;
  background-color: rgb(188, 188, 188);
  transition: 0.4s;
  transform: skewX(-45deg);
}
.social::after {
  content: "";
  position: absolute;
  top: 25%;
  left: -50%;
  width: 50%;
  height: 100%;
  background-color: rgb(188, 188, 188);
  transition: 0.2s;
  transform: skewY(-45deg);
}
.social-link:hover .social {
  color: #fffaf7;
  background-color: #f89ba3;
}
.social-link:hover .social::before {
  background-color: #f5c3c7;
}
.social-link:hover .social::after {
  background-color: #f5c3c7;
}
@media (max-width: 772px) {
  .backBar {
    width: 60%;
    left: 20%;
  }
  .backBar span {
    letter-spacing: 3px;
    font: 700 18px Helvetica;
    position: relative;
    top: -10px;
  }
}
</style>
