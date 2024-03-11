<script setup>
import { reactive, ref } from 'vue';
const cardList = ref({
  'A':{name:'A',img:'vue.svg',content:'炒飯好吃炒飯好吃炒飯好吃炒飯好吃炒飯好吃炒飯好吃'},
  'B':{name:'B',img:'vue.svg',content:'雞腿好吃雞腿好吃雞腿好吃雞腿好吃雞腿好吃雞腿好吃'},
  'C':{name:'C',img:'vue.svg',content:'炸雞排炸雞排炸雞排炸雞排炸雞排炸雞排炸雞排炸雞排'},
  'D':{name:'D',img:'vue.svg',content:'養樂多養樂多養樂多養樂多養樂多養樂多養樂多養樂多'},
});

</script>

<template>
  <div class="container">
    <el-card v-for="item in cardList" :key="item">
      <template #header><b>{{item.name}}</b></template>
      <el-row>
        <!-- <el-col style="display:flex; align-items: center; justify-content: start;" :span="24"><h2>{{item.name}}</h2></el-col> -->
        <el-col style="display:flex; align-items: center; justify-content: center;" :span="24"><img :src="`src/assets/${item.img}`" style="width: 200px"></el-col>
        <el-col style="display:flex; align-items: center; justify-content: start; font-size: small;" :span="24"><h2>{{item.content}}</h2></el-col>
        <el-col style="display:flex; align-items: center; justify-content: end;" :span="8" :offset="16"><el-button>查看更多</el-button></el-col>
      </el-row>
    </el-card>
  </div>
</template>

<style scoped>
.container{
  display: flex;
  flex-direction: horizontal;
  flex-wrap: wrap;
}
.el-card{
  width: 360px;
  margin: 20px;
}

</style>