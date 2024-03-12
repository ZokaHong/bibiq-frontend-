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
  <el-footer>
    <el-row class="footer-row">
      <el-link class="backBar" href="#">
        <span>回頁首</span>
      </el-link>
      <el-col :xs="12" :md="8"><span>聯絡我們</span></el-col>
      <el-col :xs="12" :md="8"><span>@ Copyright</span></el-col>
      <el-col :xs="{ span: 12, offset: 12 }" :md="8">
        <div style="display: flex; justify-content: center">
          <el-tag
            v-for="social in socials"
            style="width: 10%; margin: 1%"
            type="info"
            >{{ social.label }}</el-tag
          >
        </div>
      </el-col>
    </el-row>
  </el-footer>
</template>
<style scoped>
.el-footer {
  background-color: rgb(139, 197, 197);
  color: black;
  margin-top: 100px;
}
.el-row {
  height: 100%;
  align-items: center;
}
.footer-row {
  position: relative;
}
/* .footer-center::after {
  content: "";
  position: absolute;
  top: -500%;
  left: 25%;
  background-color: rgb(170, 170, 250);
  width: 50%;
  height: 425%;
  clip-path: ellipse(50% 50% at 50% 100%);
  z-index: 1;
} */
.backBar {
  display: flex;
  justify-content: center;
  align-items: end;
  width: 20%;
  height: 150%;
  color: black;
  background-color: rgb(139, 197, 197);
  position: absolute;
  top: -150%;
  left: 40%;
  clip-path: ellipse(50% 50% at 50% 100%);
  z-index: 2;
}
.backBar span {
  letter-spacing: 5px;
  font: 700 24px Helvetica;
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
