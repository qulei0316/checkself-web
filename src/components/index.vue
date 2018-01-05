<template>
    <div >
    <el-container>
      <el-header>
        <el-menu
          class="el-menu-head"
          mode="horizontal"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
          default-active="1">
          <el-menu-item index="1" @click="toIndex">首页</el-menu-item>
          <el-menu-item index="2" @click="toConsump">消费管理</el-menu-item>
          <el-menu-item index="3">个人计划</el-menu-item>
        </el-menu>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <el-menu
            class="el-menu-aside">
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>消费清单</span>
              </template>
              <el-menu-item index="1-1">
                  按记录查询
              </el-menu-item>
              <el-menu-item index="1-2">
                  按日期查询
              </el-menu-item>
            </el-submenu>
            <el-menu-item index="2">
              <i class="el-icon-menu"></i>
              <span slot="title">消费统计</span>
            </el-menu-item>
            <el-menu-item index="3">
              <i class="el-icon-setting"></i>
              <span slot="title">消费设置</span>
            </el-menu-item>
          </el-menu>
        </el-aside>
        <el-main>
         <router-view></router-view>
        </el-main>
      </el-container>  
    </el-container>
    </div> 
</template>

<script>
  export default {
    name:'consump',
    data() {
      return {
      };
    },
    methods: {
      toIndex:function () {
        this.$router.push({path:'/index'});
      },
      toConsump:function () {
        this.$router.push({path:'/consump'});
      },
      toConsumpDeL(){
        this.$router.push({path:'/consump/consumpDetailList'})
      }
    }
  }
</script>

<style>
  *{
    padding: 0px;
    margin: 0px;
  }

  .el-header {
    background-color: #545c64;
  }

  .el-aside {
    background-color: white;
    color: #333;
    height: 700px;
  }
  .el-main {
    background-color: gainsboro;
    color: #333;
    height: 800px;
    overflow: hidden;
  }
  .el-menu-head {
    margin-left: 180px;
  }
  th{
    padding: 0px;
  }
</style>
