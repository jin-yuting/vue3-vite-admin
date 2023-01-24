<template>
  <el-form :model="loginForm" class="login-container">
    <h3>系统登录</h3>
    <el-form-item>
      <el-input type="input" v-model="form.username" placeholder="请输入账号" />
    </el-form-item>
    <el-form-item>
      <el-input type="password" v-model="form.keyword" placeholder="请输入密码" />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="login">登录</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import { reactive } from 'vue-demi'
import router from '../router'
import store from '../store'
export default {
  setup() {
    const form = reactive({
      username:'admin',
      keyword: 'admin'
    })
    const login = ()=>{
      // 登录成功获取menu数据，存储到vuex中， aside组件中获取vuex数据展示左侧菜单
      // store.commit('setMenu',  );
      // store.commit('addMenu',  );
      // store.commit('setToken',  );
      // 
      router.push({
        name: 'home'
      })
    }
    return{
      form,
      login
    }
  },
}
</script>

<style lang="less" scoped>
.login-container{
  width: 350px;
  background-color: #fff;
  border: 1px solid #eaeaea;
  border-radius: 15px;
  padding: 35px 35px 15px 35px;
  box-shadow: 0 0 25px #cacaca;
  margin: 180px auto;

  h3{
    text-align: center;
    margin-bottom: 20px;
    color: #505450;
  }
}
</style>

