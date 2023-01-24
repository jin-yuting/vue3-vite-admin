<template>
  <div class="user-header">
    <el-button type="primary" @click="dialogVisible = true">+新增</el-button>
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
      <el-table-column prop="name" label="姓名" width="100" />
      <el-table-column prop="state" label="State" width="120" />
      <el-table-column prop="city" label="City" width="120" />
      <el-table-column prop="address" label="地址" width="500" />
      <el-table-column prop="zip" label="Zip" width="120" />
      <el-table-column fixed="right" label="Operations" min-width="180">
        <template #default="scope">
          <el-button size="small" @click="handleClick(scope.row)">编辑</el-button>
          <el-button size="danger">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination @current-change="changePage" small background :total="50" class="pager mt-4" layout="prev,pager,next"></el-pagination>
  </div>
  <el-dialog
    v-model="dialogVisible"
    :title="action ==='add'? '新增用户': '编辑用户'"
    width="50%"
    :before-close="handleClose"
  >
  <el-form :inline="true" :model="formUser" ref="userForm" class="demo-form-inline">
    <el-row>
      <el-col :span="12">
          <el-form-item label="姓名" prop="name" :rules="[
            {required: true,message: '姓名是必填项'}
          ]">
          <el-input v-model="formUser.name" placeholder="请输入" />
        </el-form-item>
      </el-col>
      <el-col :span="12">
        <el-form-item label="年龄" prop="age" :rules="[
            {required: true,message: '年龄是必填项'},
            {type: 'number',message: '年龄是必须数字'}
          ]">
        <el-input v-model="formUser.age" placeholder="请输入" />
      </el-form-item>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12">
        <el-form-item label="性别" prop="sex" :rules="[
            {required: true,message: '性别是必填项'}
          ]">
          <el-select v-model="formUser.sex" placeholder="请选择">
            <el-option label="男" value="0"></el-option>
            <el-option label="女" value="1"></el-option>
          </el-select>  
        </el-form-item>
        <el-form-item label="出生日期">
          <el-date-picker v-model="formUser.birth" type="date" placeholder="请输入"
            style="width: 100%;">
          </el-date-picker>
        </el-form-item>
      </el-col>
    </el-row>
  </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="handleCancel">取消</el-button>
        <el-button type="primary" @click="onsubmit">
          确定
        </el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script>
import { defineComponent, getCurrentInstance, onMounted, reactive,ref } from 'vue';
import { ElMessageBox,ElMessage } from 'element-plus'
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
    const action = ref('add');
    // 编辑操作
    const handleClick=(row)=>{
      dialogVisible.value = true;
      action.value ='edit';
      proxy.$nextTick(()=>{
        Object.assign(formUser,row);
      })
      console.log(row,'row');
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
    // 控制模态框显示隐藏
    const dialogVisible = ref(false);
    const handleClose = (()=>{
      ElMessageBox.confirm('确定关闭吗?')
    })
    const formUser = reactive({
      name: '',//姓名
      age: ''
    })
    // 取消按钮
    const handleCancel = ()=>{
      dialogVisible.value = false;
      proxy.$refs.userForm.resetFields();
    }
    // 确定按钮
    const onsubmit = async () =>{
      proxy.$refs.userForm.validate((valid)=>{
        if(valid){

        }else{
          ElMessage({
            showClose: true,
            message: '请输入正确的内容',
            type: 'error'
          })
        }
      })
    }
    return{
      tableData,
      formInline,
      getUserData,
      changePage,
      handleSerach,
      action,
      handleClick,
      dialogVisible,
      handleClose,
      formUser,
      handleCancel,
      onsubmit
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