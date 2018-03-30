<template>
  <div>
    <section id="wrap">
      <h1 class="userClass">供应商利润管理</h1>

      <el-col :span="24" class="formSearch">
        <el-form :inline="true">
          <el-form-item>
            <span>供应商利润筛选:</span>
          </el-form-item>
          <el-form-item>
            <el-input type="text" v-model="userName" auto-complete="off"size="small"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="search" size="small">查询</el-button>
          </el-form-item>
        </el-form>
      </el-col>
      数据展示
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

    </section>
  </div>
</template>
<script>
  import {mapGetters} from 'vuex'
  export default{
    name: '',
    data(){
      return {
        isLoading:false,
        total:0,
        formLabelWidth:'120px',
        userName:'',
        addDialog:false,//添加弹窗
        updateDialog:false,//修改弹窗
        addOptions:{
          "loginUserID": "huileyou",
          "loginUserPass": "123",
          "operateUserID": "",
          "operateUserName": "",
          "pcName": "",
          "data": {
            "sm_partnerTypeID": '',
            "sm_apf_Provice": '',
            "sm_apf_City": '',
            "sm_apf_Percent": '',
          }
        },
        //添加参数
      }
    },
    computed: mapGetters([
      'adTypeList',
    ]),
    created(){
      this.initContent().then(()=>{},err=>{
        this.$notify({
          message: err,
          type: 'error'
        });
      })
    },
    methods: {
      async initContent() {
        //查询广告类型
        let options = {
          "loginUserID": "huileyou",
          "loginUserPass": "123",
          "operateUserID": "",
          "operateUserName": "",
          "pcName": "",
          "sm_at_ID": "",//广告类型编号
          "sm_at_PositionInfoID": "",//位置信息编码
          "sm_at_Name": "",//广告类型名称
          "sm_at_Times": "",//次数
          "sm_at_Unit": "",//单位
          "sm_at_Price": "",//收费金额
          "sm_at_CreateTime": "",//创建时间
          "sm_at_Remark": "",//备注
        };
        await this.$store.dispatch('initAdTypeList', options)
      },
      search(){
        this.initContent()
        console.log(this.adTypeList)
      }
    }
  }
</script>
<style scoped>

</style>
