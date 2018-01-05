<template>
  <div class="text">
    <div class="breadcrumb">
        <el-breadcrumb separator="/">
            <el-breadcrumb-item >消费清单</el-breadcrumb-item>
            <el-breadcrumb-item >按记录查询</el-breadcrumb-item>
        </el-breadcrumb>
    </div>
    <div class="content-show">
      <div class="filter">
        <el-select style="width: 150px" clearable placeholder="消费类型">
        </el-select>
         <el-select style="width: 150px; margin-left:50px" clearable placeholder="消费金额">
        </el-select>
        <el-date-picker
           v-model="startTime"
           style="width: 150px; margin-left:50px"
            type="date"
          placeholder="起始时间">
        </el-date-picker>
        <span style="color:silver">~</span>
        <el-date-picker
           v-model="endTime"
           style="width: 150px"
            type="date"
          placeholder="结束时间">
        </el-date-picker>
        <el-button type="primary" style="margin-left:110px" plain>筛选</el-button>
      </div>
      <div class="content-list">
        <el-table
          :data="tableData"
          stripe
          style="width: 100%">
          <el-table-column
            prop="consump_date"
            label="日期"
            width="200">
          </el-table-column>
          <el-table-column
            prop="consump_type"
            label="消费类型"
            width="180">
          </el-table-column>
          <el-table-column
            prop="expense"
            label="金额"
            width="180">
          </el-table-column>
          <el-table-column
            prop="consump_desc"
            label="消费详情">
          </el-table-column>
        </el-table>
        <el-pagination
          style="float:right"
          @current-change="handleCurrentChange"
          :page-size="pagesize"
          background
          layout="prev, pager, next, jumper"
          :total="totalSize">
        </el-pagination>
      </div>
    </div>
  </div>
 
</template>

<script>
 export default {
  data () {
  return {
    totalSize:0,
    pagesize:10,
    tableData: [
    ],
    startTime:'',
    endTime:''
    }
  },
  mounted(){
    this.$http.post('http://localhost:9000/checkself/consump/getdetailrecord',
    {
      pageIndex:1
    }).then((response)=>{
      this.totalSize = response.body.data.totalSize;
      this.tableData = response.body.data.consumptionDetailList
    },(response)=>{
      this.$message.error('列表加载失败')
    })
  },
  methods: {
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      }
    }
 }
</script>

<style>

</style>
