<script setup>
const bannerImageList = [
  "src/assets/chiikawa.png",
  "src/assets/chiikawa1.png",
  "src/assets/chiikawa2.png",
  "src/assets/chiikawa3.png",
];
</script>
<template>
  <el-container>
    <div style="width: 100%">
      <el-carousel type="card" height="200px">
        <el-carousel-item v-for="item in bannerImageList.length" :key="item">
          <el-image :src="bannerImageList[item - 1]" fit="contain">
            <template #placeholder
              ><span class="loading">Loading...</span></template
            >
            <template #error>
              <div class="image-slot">
                <el-icon><Camera /></el-icon>
              </div>
            </template>
          </el-image>
        </el-carousel-item>
      </el-carousel>
    </div>
    <!-- <div style="margin: auto">
      <h1 class="home-title" data-text="這裡是主頁">這裡是主頁</h1>
    </div> -->
  </el-container>
</template>
<style scoped>
.el-container {
  background-color: rgba(237, 191, 207, 0.2);
  border-bottom: 3px solid #000;
  flex-wrap: wrap;
}
.el-image {
  width: 100%;
  height: 200px;
}
.loading {
  position: absolute;
  right: 30px;
  bottom: 10px;
  font: 700 20px Helvetica;
}
.home-title {
  position: relative;
}
.home-title::after {
  content: attr(data-text);
  color: #fdffea;
  position: absolute;
  top: 0;
  left: 0;
  clip-path: circle(20% at 50% 50%);
  animation: movelight 10s infinite;
}
@keyframes movelight {
  0% {
    clip-path: circle(20% at 0% 50%);
  }
  50% {
    clip-path: circle(20% at 100% 50%);
  }
  100% {
    clip-path: circle(20% at 0% 50%);
  }
}
</style>
