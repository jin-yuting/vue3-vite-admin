<template>
  <el-row class="home" :gutter="20">
    <el-col :span="8" style="margin-top: 20px">
      <el-card shadow="hover">
        <div class="user">
          <img src="" alt="" />
          <div class="userinfo">
            <p class="name">Admin</p>
            <p class="role">超级管理员</p>
          </div>
        </div>
        <div class="login-info">
          <p><span>上次登录时间:</span>2022-07-01</p>
          <p><span>上次登录地点:</span>杭州</p>
        </div>
      </el-card>
      <el-card shadow="hover" style="margin-top: 20px; height: 450px">
        <el-table :data="tableData">
          <el-table-column
            v-for="(val, key) in tableLabel"
            :key="key"
            :prop="key"
            :label="val"
          >
          </el-table-column>
        </el-table>
      </el-card>
    </el-col>
    <el-col :span="16" style="margin-top: 20px">
      <div class="num">
        <el-card :body-style="{display:'flex',padding:0}"
        v-for="item in countData" :key="item.name">
          <component class="icons" :is="item.icon" :style="{background:item.color}"></component>
          <div class="detail">
            <p class="num">￥{{item.value}}</p>
            <p class="txt">{{item.name}}</p>
          </div>
        </el-card>
      </div>
      <el-card style="height: 280px;">
        <div ref="echart" style="height: 280px;"></div>
      </el-card>
      <div class="grahp">
        <el-card style="height: 260px;">
          <div ref="userechart" style="height: 240px;"></div>
        </el-card>
        <el-card style="height: 260px;">
          <div ref="videoechart" style="height: 240px;"></div>
        </el-card>
      </div>
    </el-col>
  </el-row>
</template>

<script>
import { defineComponent, getCurrentInstance, onMounted, reactive, ref } from "vue";
import axios from "axios";
import * as echarts from 'echarts';
export default defineComponent({
  setup() {
    onMounted(() => {
      getTableList();
    });
    const {proxy} = getCurrentInstance()
    const getTableList = async () => {
      //封装过后的使用
      // let res = await proxy.$api.getTableData();
      // tableData.value = res;

      await axios.get("/home/getData").then((res) => {
        tableData.value = res.data.data.tableData;
      });
    };
    let tableData = ref([]);
    // const tableData = [
    // {
    //   name:'oppo',
    //   totayBuy: 500,
    //   monthBuy: 1000,
    //   totalBuy: 2000
    // }
    // ]
    const tableLabel = {
      name: "课程",
      totayBuy: "今日购买",
      monthBuy: "本月购买",
      totalBuy: "总购买",
    };
    const countData = [
      {
        value:1234,
        name: '今日支付订单'
      },
      {
        value:1234,
        name: '今日支付订单'
      },
      {
        value:1234
      },
      {
        value:1234
      },
      {
        value:1234
      },
      {
        value:1234
      },
    ]

    // echarts 表格的渲染部分
    let xOptions = reactive({
      textStyle:{ 
        color:'#333'
      },
      grid:{
        left: '20%'
      },
      tooltip:{
        trigger: 'axis'
      },
      xAxis:{
        type: 'category',
        data:[],
        axisLine:{
          lineStyle: {
            color: '#17b3a3'
          }
        }
      },
      yAxis:[
        {
          type:'value',
          axisLine:{
            lineStyle: {
              color: '#17b3a3'
            }
          }
        }
      ],
      color: ['#2ec7c9','#b6a2de','#5ab1ef','#ffb980','#d87a80','#8d98b3']
    })
    let pieOptions = reactive({
      tooltip: {
        trigger: 'item'
      },
      color:[
        '#0f78f4',
        '#dd536b',
        '#9462e5',
        '#a6a6a6',
        '#e1bb22',
        '#39c362',
        '#3ed1cf',
      ],
      series: []
    })
    let orderData = reactive({
      xData: [],
      series: [],
    })
    let userData = reactive({
      xData: [],
      series: [],
    })
    let videoData = reactive({
      series: [],
    })
    //获取echart数据
    const getEchartData = async () =>{
      // 数据一系列操作。。。

      // userData 渲染
      let hEcharts = echarts.init(proxy.$refs["echart"]);
      hEcharts.setOption(xOptions);

      let uEcharts = echarts.init(proxy.$refs["userechart"]);
      uEcharts.setOption(xOptions);
    }
    return {
      tableData,
      tableLabel,
      countData,
      getEchartData
    };
  },
});
</script>

<style lang="less" scoped>
.home {
  .user {
    display: flex;
    align-items: center;
    padding-bottom: 20px;
    margin-bottom: 20px;
    border-bottom: 1px solid #ccc;
    img {
      width: 150px;
      height: 150px;
      border-radius: 50%;
      margin-right: 40px;
    }
  }
  .login-info {
    p {
      line-height: 30px;
      font-size: 14px;
      color: #999;
      span {
        color: #666;
        // margin-right: 60px;
      }
    }
  }
  .num{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .el-card{
      width: 32%;
      margin-bottom: 20px;
    }
    .icons{
      width: 80px;
      height: 80px;
      font-size: 30px;
      text-align: center;
      line-height: 80px;
      color: #fff;
    }
    .detail{
      margin-left: 15px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      .num{
        font-size: 30px;
        margin-bottom: 10px;
      }
      .txt{
        font-size: 14px;
        text-align: center;
        color: #999;
      }
    }
  }
}
</style>