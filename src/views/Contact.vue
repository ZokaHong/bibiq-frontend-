<script setup>
</script>
<template>
  <el-container>
    <el-row>
      <el-col class="contact-header">
        <span>聯絡我們</span>
      </el-col>
      <el-col class="contact-main">
        <el-row class="contact-row">
          <el-col :span="6" class="col-title"><span>店名</span></el-col>
          <el-col :span="18" class="col-content"><span>bibiQ</span></el-col>
          <el-col :span="6" class="col-title"><span>電話</span></el-col>
          <el-col :span="18" class="col-content"
            ><span>09-xxxxxxxx</span></el-col
          >
          <el-col :span="6" class="col-title"><span>地址</span></el-col>
          <el-col :span="18" class="col-content"
            ><span>xx市xx區xx路xx號</span></el-col
          >
          <el-col :span="6" class="col-title"><span>信箱</span></el-col>
          <el-col :span="18" class="col-content"
            ><span>xxxxx123@gmail.com</span></el-col
          >
        </el-row>
      </el-col>
    </el-row>
  </el-container>
</template>
<style scoped>


.el-container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
.el-row {
  width: 80%;
  margin: 5% 0;
  background-color: #ffffff;
  padding: 2%;
}
.contact-header {
  display: flex;
  justify-content: start;
  align-content: center;
  font: 400 28px Helvetica;
  padding: 20px;
}
.contact-row {
  width: 100%;
  align-items: end;
}
.col-title, .col-content{
  margin-top: 10px;
}
.col-title span{
  font: 400 24px Helvetica;
}
.col-content span{
  font: 400 20px Helvetica;
}
</style>
