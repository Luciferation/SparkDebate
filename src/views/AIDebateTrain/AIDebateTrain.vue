<script setup>
import { reactive, watch } from 'vue';
import ExploreAI from './Sub/ExploreAI.vue';
import CreateAI from './Sub/CreateAI.vue';
const state = reactive({
  // 探索AI助手 |创造AI助手
  mode: '探索AI助手'
})

// 监听模式变化
watch(() => state.mode, (val) => {
  console.log(val);
})
</script>

<template>
  <div class="main-box">
    <div class="header">
      <div class="tab">
        首页
      </div>
    </div>
    <!-- aside和main -->
    <div class="mid">
      <div class="aside">
        <div class="modeChangeBox">
          <el-radio-group v-model="state.mode" size="large">
            <el-radio-button label="探索AI助手">探索AI助手</el-radio-button>
            <el-radio-button label="创造AI助手">创造AI助手</el-radio-button>
          </el-radio-group>
        </div>
        <!-- 可选会话列表 -->
        <el-scrollbar class="list">
          <el-menu default-active="1" @open="handleOpen" @close="handleClose">
            <el-menu-item index="1">1</el-menu-item>
            <el-menu-item index="2">2</el-menu-item>
            <el-menu-item index="3">3</el-menu-item>
            <el-menu-item index="3">3</el-menu-item>
            <el-menu-item index="3">3</el-menu-item>
            <el-menu-item index="3">3</el-menu-item>
            <el-menu-item index="3">3</el-menu-item>
            <el-menu-item index="3">3</el-menu-item>
            <el-menu-item index="3">3</el-menu-item>
            <el-menu-item index="3">3</el-menu-item>
            <el-menu-item index="3">3</el-menu-item>
            <el-menu-item index="3">3</el-menu-item>
            <el-menu-item index="3">3</el-menu-item>
            <el-menu-item index="3">3</el-menu-item>
            <el-menu-item index="3">3</el-menu-item>
            <el-menu-item index="3">3</el-menu-item>
            <el-menu-item index="3">3</el-menu-item>
            <el-menu-item index="3">3</el-menu-item>
            <el-menu-item index="3">3</el-menu-item>
            <el-menu-item index="3">3</el-menu-item>
            <el-menu-item index="3">3</el-menu-item>
            <el-menu-item index="3">3</el-menu-item>
            <el-menu-item index="3">3</el-menu-item>
          </el-menu>
        </el-scrollbar>
      </div>
      <div class="main">
        <div v-if="state.mode === '探索AI助手'">
          <ExploreAI></ExploreAI>
        </div>
        <div v-else-if="state.mode === '创造AI助手'">
          <CreateAI></CreateAI>
        </div>
      </div>
    </div>
  </div>
</template>
  

<style lang="scss" scoped>
.header {
  background-color: lightpink;
  height: 70px;
  display: flex;
  align-items: center;
  .tab {
    margin-top: 4px;
    margin-left: 20px;
    background-color: lightcoral;
    width: 70px;
    height: 50px;
    line-height: 50px;
    text-align: center;
  }
}

.mid {
  display: flex;
  height: calc(100vh - 70px);
  .aside {
    width: 280px;
  }
  .main {
    flex: 1;
  }
}
.aside {
  background-color: lightblue;

  .modeChangeBox {
    background-color: lightseagreen;  
    height: 100px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .list {
    height: calc(100vh - 170px);
  }
}

.main {
  background-color: lightgreen;
}

</style>