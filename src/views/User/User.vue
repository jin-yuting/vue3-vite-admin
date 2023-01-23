<template>
  <div class="user-header">
    <el-button type="primary">+新增</el-button>
    <el-form :inline="true" :model="formInline">
    <el-form-item label="请输入">
      <el-input v-model="formInline.keyword" placeholder="请输入" />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="handleSerach">搜索</el-button>
    </el-form-item>
  </el-form>
  </div>
  <div class="table">
    <el-table :data="tableData" style="width: 100%">
      <!-- <el-table-column 
      v-for="item in tableLabel" 
      :key="item.prop" 
      :label="item.label" :prop="item.prop" /> -->

      <el-table-column fixed prop="date" label="Date" width="150" />
      <el-table-column prop="name" label="Name" width="100" />
      <el-table-column prop="state" label="State" width="120" />
      <el-table-column prop="city" label="City" width="120" />
      <el-table-column prop="address" label="Address" width="500" />
      <el-table-column prop="zip" label="Zip" width="120" />
      <el-table-column fixed="right" label="Operations" min-width="180">
        <template #default>
          <el-button size="small" @click="handleClick">编辑</el-button>
          <el-button size="danger">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination @current-change="changePage" small background :total="50" class="pager mt-4" layout="prev,pager,next"></el-pagination>
  </div>
</template>

<script>
import { defineComponent, getCurrentInstance, onMounted, reactive } from 'vue';
export default defineComponent({
  setup() {
    const {proxy} = getCurrentInstance()
    onMounted(()=>{
    })
    const tableData = [
      {
        date: '2016-05-03',
        name: 'Tom',
        state: 'California',
        city: 'Los Angeles',
        address: 'No. 189, Grove St, Los Angeles',
        zip: 'CA 90036',
        tag: 'Home',
      },
      {
        date: '2016-05-02',
        name: 'Tom',
        state: 'California',
        city: 'Los Angeles',
        address: 'No. 189, Grove St, Los Angeles',
        zip: 'CA 90036',
        tag: 'Office',
      },
      {
        date: '2016-05-04',
        name: 'Tom',
        state: 'California',
        city: 'Los Angeles',
        address: 'No. 189, Grove St, Los Angeles',
        zip: 'CA 90036',
        tag: 'Home',
      },
      {
        date: '2016-05-01',
        name: 'Tom',
        state: 'California',
        city: 'Los Angeles',
        address: 'No. 189, Grove St, Los Angeles',
        zip: 'CA 90036',
        tag: 'Office',
      },
    ]
    const getUserData = async()=>{
      // let res = await proxy.$api.getUserData();
    }
    const handleClick=()=>{

    }
    const changePage = (page)=>{
      console.log(page);
    }
    const formInline = reactive({
      keyword: ''
    })
    const handleSerach = ()=>{
      console.log(formInline.keyword);
    }
    return{
      tableData,
      formInline,
      getUserData,
      changePage,
      handleSerach,
    }
  },
})
</script>

<style lang="less" scoped>
.table{
  position: relative;
  height: 430px;
  .pager{
    position: absolute;
    right: 0;
    bottom: -20px;
  }
}
.user-header{
  display: flex;
  justify-content: space-between;
}
</style>