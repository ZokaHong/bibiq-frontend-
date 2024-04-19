<template>
  <el-container>
    <div class="block">
      <span class="demonstration">DateTimePicker</span>
      <el-date-picker
        v-model="value"
        type="datetime"
        placeholder="Select date and time"
        format="YYYY-MM-DD HH:mm:ss"
      />
    </div>
  </el-container>
</template>

<script setup>
import { ref } from "vue";
const value = ref("");
const defaultTime = new Date(2000, 1, 1, 12, 0, 0);
</script>

<style scoped>
.el-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.demonstration {
  display: block;
  color: var(--el-text-color-secondary);
  margin: 10px 0;
}
</style>
