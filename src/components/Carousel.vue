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

    <!-- <el-image
      :src="bannerImageList[0]"
      fit="contain"
      :previewSrcList="bannerImageList"
      :initial-index="0"
    >
      <template #placeholder><span class="loading">Loading...</span></template>
      <template #error>
        <div class="image-slot">
          <el-icon><Camera /></el-icon>
        </div>
      </template>
    </el-image> -->
  </el-container>
</template>
<style scoped>
.el-container {
  background-color: rgba(237, 191, 207, 0.2);
  border-bottom: 3px solid #000;
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
</style>
