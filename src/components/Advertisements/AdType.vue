<template>
  <div>
    <section id="wrap">
      <h1 class="userClass">广告类型管理</h1>
      <el-col :span="24" class="formSearch">
        <el-form :inline="true">
          <el-form-item>
            <span>广告类型名称筛选:</span>
          </el-form-item>
          <el-form-item>
            <el-input type="text" v-model="adTypeName" auto-complete="off" placeholder="广告类型名称" size="small"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="search" size="small">查询</el-button>
          </el-form-item>
        </el-form>
      </el-col>
      <!--数据展示-->
      <el-table
        :data="adTypeList"
        highlight-current-row
        v-loading="isLoading"
        style="width: 100%">
        <el-table-column
          align="center"
          sortable
          label="广告类型编号"
          prop="sm_at_ID">
        </el-table-column>
        <el-table-column
          align="center"
          sortable
          label="位置信息编码"
          prop="sm_at_PositionInfoID">
        </el-table-column>
        <el-table-column
          align="center"
          sortable
          label="广告类型名称"
          prop="sm_at_Name">
        </el-table-column>
        <el-table-column
          align="center"
          sortable
          label="次数"
          prop="sm_at_Times">
        </el-table-column>
        <el-table-column
          align="center"
          sortable
          label="单位"
          prop="sm_at_Unit">
        </el-table-column>
        <el-table-column
          align="center"
          sortable
          label="收费金额"
          prop="sm_at_Price">
        </el-table-column>
        <el-table-column
          align="center"
          sortable
          label="创建时间"
          prop="sm_at_CreateTime">
        </el-table-column>
        <el-table-column
          align="center"
          sortable
          label="备注"
          prop="sm_at_Remark">
        </el-table-column>
      </el-table>
      <!--分页-->
      <div class="block" style="float: right;">
        <el-pagination
          @current-change="handleCurrentChange"
          :page-size="5"
          layout="total, prev, pager, next"
          :total="total"
          v-show="total"
        >
        </el-pagination>
      </div>
    </section>
  </div>
</template>
<script>
  import {mapGetters} from 'vuex'
  export default{
    name: '',
    data(){
      return {
        isOff:true,
        formLabelWidth:'120px',
        isLoading:false,
        adTypeName:'',
        addDialog:false,
        updateDialog:false,
        total:0,
        addOptions:{
          "loginUserID": "huileyou",
          "loginUserPass": "123",
          "operateUserID": "",
          "operateUserName": "",
          "pcName": "",
          "data": {
            "sm_at_ID": "",//广告类型编号
            "sm_at_PositionInfoID": "",//位置信息编码
            "sm_at_Name": "",//广告类型名称
            "sm_at_Times": "",//次数
            "sm_at_Unit": "",//单位
            "sm_at_Price": "",//收费金额
            "sm_at_CreateTime": "",//创建时间
            "sm_at_Remark": "",//备注
          }
        }
      }
    },
    computed: mapGetters([
      'AdTypeList',
      'adTypeList',
      'updateAdTypeObj',
      'adTypeNameList'
    ]),
    created(){
      this.initData(this.adTypeName)
    },
    methods: {
      //分页
      handleCurrentChange(num){
        this.initData(this.adTypeName,num)
      },
      //查询
      search(){
        this.initData(this.adTypeName)
      },
      initData(name,page){
        let options = {
          "loginUserID": "huileyou",
          "loginUserPass": "123",
          "operateUserID": "",
          "operateUserName": "",
          "pcName": "",
          "sm_at_ID": "",//广告类型编号
          "sm_at_PositionInfoID": "",//位置信息编码
          "sm_at_Name": name?name:'',//广告类型名称
          "sm_at_Times": "",//次数
          "sm_at_Unit": "",//单位
          "sm_at_Price": "",//收费金额
          "sm_at_CreateTime": "",//创建时间
          "sm_at_Remark": "",//备注
          "isDelete": 0,
          "page": page?page:1,
          "rows": 10
        };
        this.isLoading = true;
        this.$store.dispatch('initAdTypeList',options)
          .then(total=>{
            this.total = total;
            this.isLoading = false;
          },err=>{
            this.$notify({
              message: err,
              type: 'error'
            });
          })
      },
    },
  }
</script>
<style scoped>

</style>
