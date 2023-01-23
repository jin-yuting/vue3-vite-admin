<template>
  <el-header>
    <div class="l-content">
      <!-- 图标展示 -->
      <el-button size="small" plain @click="handleCollapse">
        <el-icon><Menu /></el-icon>
      </el-button>
      <el-breadcrumb separator="/" class="bread">
        <!-- 首页是一定存在的 写死 -->
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item v-if="current" :to="current.path">{{current.label}}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="r-content">
      <el-dropdown>
    <span class="el-dropdown-link">
      
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item>个人中心</el-dropdown-item>
        <el-dropdown-item>退出</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
    </div>
  </el-header>
</template>

<script>
import { computed, defineComponent } from 'vue';
import { useStore } from "vuex";
export default defineComponent({
  setup() {
    let store = useStore();
    const  getImgsrc = () =>{
      return new URL(``, import.meta.url).href;
    }
    let handleCollapse = ()=>{
      store.commit('updateIsCollapse','123')
    }
    //计算属性
    const current = computed(()=>{
      return store.state.currentMenu;
    })
    return{
      getImgsrc,
      handleCollapse,
      current
    }
  }
})
</script>

<style lang="less" scoped>
header{
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: #333;
}
.l-content{
  display: flex;
  align-items: center;
  .el-button{
    margin-right: 20px;
  }
  h3{
    color: #fff;
  }
}
.bread /deep/span{
  color: #fff;
  cursor: pointer;
}
</style>

