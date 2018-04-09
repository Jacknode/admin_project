<template>
  <div>
    <section id="wrap">
      <h1 class="userClass">广告收费方式</h1>

      <el-col :span="24" class="formSearch">
        <el-form :inline="true">
          <el-form-item>
            <span>广告收费方式筛选:</span>
          </el-form-item>
          <el-form-item>
            <el-input type="text" v-model="userName" auto-complete="off"size="small"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="search" size="small">查询</el-button>
          </el-form-item>
        </el-form>
      </el-col>
      <!--数据展示-->
      <el-table
        :data="adChargeWayList"
        highlight-current-row
        v-loading="isLoading"
        style="width: 100%">
        <el-table-column
          align="center"
          sortable
          label="收费方式编码"
          prop="sm_icw_ID">
        </el-table-column>
        <el-table-column
          align="center"
          label="收费方式名称"
          prop="sm_icw_Name">
        </el-table-column>
        <el-table-column
          align="center"
          label="备注"
          prop="sm_icw_Remark">
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
            "sm_icw_ID": "",//收费方式编码
            "sm_icw_Name": "",//收费方式名称
            "sm_icw_Remark": "",//备注
          }
        },//添加参数
      }
    },
    computed: mapGetters([
      'adChargeWayList',
      'partnershipTypeList',
      'proviceList',
      'cityList',
      'updateAdminVendorProfitObj'
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
      //选中省
      changeProvice(){
        let options = {}
        if(this.addOptions.data.sm_apf_Provice){
          this.addOptions.data.sm_apf_City = ''
          options = {
            areaPid:this.addOptions.data.sm_apf_Provice
          }
        }else{
          this.updateAdminVendorProfitObj.sm_apf_City = ''
          options = {
            areaPid:this.updateAdminVendorProfitObj.sm_apf_Provice
          }
        }
        this.$store.dispatch('initCityList',options)
          .then(()=>{},err=>{
            this.$notify({
              message: err,
              type: 'error'
            });
          })
      },
      async initContent(){
        //查询合作类型
        let options = {
          "loginUserID": "huileyou",
          "loginUserPass": "123",
          "operateUserID": "",
          "operateUserName": "",
          "pcName": "",
          "sm_icw_ID": "",//收费方式编码
          "sm_icw_Name": "",//收费方式名称
          "sm_icw_Remark": "",//备注
        };
        await this.$store.dispatch('initAdChargeWayList',options)
      },
      //分页
      handleCurrentChange(num){
        this.initData(num)
      },
      //初始化
      initData(name){
        let options = {
          "loginUserID": "huileyou",
          "loginUserPass": "123",
          "operateUserID": "",
          "operateUserName": "",
          "pcName": "",
          "sm_icw_ID": "",//收费方式编码
          "sm_icw_Name": name?name:"",//收费方式名称
          "sm_icw_Remark": "",//备注
        }
        this.isLoading = true;
        this.$store.dispatch('initAdChargeWayList',options)
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
      //查询
      search(){
        this.initData(this.userName)
      },
    },
  }
</script>
<style scoped>

</style>
