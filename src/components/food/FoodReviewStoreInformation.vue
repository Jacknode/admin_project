<template>
  <div>
    <!--美食审核店面信息-->
    <section id="wrap">
      <h1 class="userClass">店面信息管理</h1>
      <el-col :span="24" class="formSearch">
        <el-form :inline="true">
          <el-form-item>
            <span>店面名称筛选:</span>
          </el-form-item>

          <el-form-item>
            <el-input type="text" v-model="storeName" auto-complete="off" placeholder="请输入店面名称" size="small"></el-input>
          </el-form-item>

          <el-form-item>
            <el-button type="primary" @click="search" size="small">查询</el-button>
            <!--<el-button type="primary" @click="Add" size="small">新增</el-button>-->
          </el-form-item>
        </el-form>
      </el-col>

      <!--数据展示-->
      <el-table
        :data="initFoodReviewStoreInformationList"
        highlight-current-row
        v-loading="isLoading"
        style="width: 100%">

        <el-table-column type="expand">
          <template slot-scope="props">
            <el-form label-position="left" inline class="demo-table-expand">

              <el-form-item label="店面编号:">
                <span>{{ props.row.fd_sf_ID }}</span>
              </el-form-item>
              <el-form-item label="分类编号:">
                <span>{{ props.row.fd_sf_TypeID }}</span>
              </el-form-item>
              <el-form-item label="商家编号:">
                <span>{{ props.row.fd_py_Name }}</span>
              </el-form-item>
              <el-form-item label="用餐人数编号:">
                <span>{{ props.row.fd_sf_MansID }}</span>
              </el-form-item>
              <el-form-item label="产品名称:">
                <span>{{ props.row.fd_sf_ProductName }}</span>
              </el-form-item>
              <el-form-item label="地址描述:">
                <span>{{ props.row.fd_sf_Address }}</span>
              </el-form-item>
              <el-form-item label="经度:">
                <span>{{ props.row.fd_sf_Lng }}</span>
              </el-form-item>
              <el-form-item label="纬度:">
                <span>{{ props.row.fd_sf_Lat }}</span>
              </el-form-item>
              <el-form-item label="省:">
                <span>{{ props.row.fd_sf_Provice }}</span>
              </el-form-item>
              <el-form-item label="市:">
                <span>{{ props.row.fd_sf_City }}</span>
              </el-form-item>
              <el-form-item label="人均价格:">
                <span>{{ props.row.fd_sf_AvgPrice }}</span>
              </el-form-item>
              <el-form-item label="营业时间:">
                <span>{{ props.row.fd_sf_OpenTime }}</span>
              </el-form-item>
              <el-form-item label="联系电话:">
                <span>{{ props.row.fd_sf_Phone }}</span>
              </el-form-item>
              <el-form-item label="是否有WAFI:">
                <span>{{ props.row.fd_sf_HasWafi }}</span>
              </el-form-item>
              <el-form-item label="供应商编码:">
                <span>{{ props.row.fd_sf_TradeID }}</span>
              </el-form-item>
              <el-form-item label="商家编号:">
                <span>{{ props.row.fd_sf_TransInfo }}</span>
              </el-form-item>
              <el-form-item label="商家编号:">
                <span>{{ props.row.fd_sf_Minutes }}</span>
              </el-form-item>
              <el-form-item label="商家编号:">
                <span>{{ props.row.fd_sf_Introduce }}</span>
              </el-form-item>
              <el-form-item label="商家编号:">
                <span>{{ props.row.fd_sf_PassStatus }}</span>
              </el-form-item>
              <el-form-item label="供应商编码:">
                <span>{{ props.row.fd_sf_OperateID }}</span>
              </el-form-item>

            </el-form>
          </template>
        </el-table-column>

        <el-table-column
          label="店面编号"
          prop="fd_sf_ID">
        </el-table-column>
        <el-table-column
          label="店面名称"
          prop="fd_sf_ProductName">
        </el-table-column>
        <el-table-column
          label="审核状态"
          prop="fd_sf_PassStatus">
        </el-table-column>

        <!--<el-table-column label="操作">-->
          <!--<template slot-scope="scope">-->
            <!--<el-button-->
              <!--size="mini"-->
              <!--@click="updateAdminBusinessInformation(scope.row.ts_tb_UserID)">修改-->
            <!--</el-button>-->
            <!--<el-button-->
              <!--size="mini"-->
              <!--type="danger"-->
              <!--@click="deleteAdminBusinessInformation(scope.row.ts_tb_UserID )">删除-->
            <!--</el-button>-->
          <!--</template>-->
        <!--</el-table-column>-->

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

      <!--添加店面信息-->
      <!--<el-dialog title="添加美食推荐店铺" :visible.sync="addDialog">-->
        <!--<el-form :model="addOptions">-->
          <!--<el-form-item label="店铺编码:" :label-width="formLabelWidth">-->
            <!--<el-input v-model="addOptions.data.fd_is_ShopID" placeholder="请输入店铺编码"></el-input>-->
          <!--</el-form-item>-->
        <!--</el-form>-->
        <!--<div slot="footer" class="dialog-footer">-->
          <!--<el-button @click="addDialog = false">取 消</el-button>-->
          <!--<el-button type="primary" @click="addSubmit">确 定</el-button>-->
        <!--</div>-->
      <!--</el-dialog>-->

      <!--修改店面信息-->
      <!--<el-dialog title="修改美食推荐" :visible.sync="updateDialog">-->
        <!--<el-table-->
          <!--:data="tableData5"-->
          <!--style="width: 100%">-->
          <!--<el-table-column type="expand">-->
            <!--<template slot-scope="props">-->
              <!--<el-form label-position="left" inline class="demo-table-expand">-->
                <!--<el-form-item label="商品名称">-->
                  <!--<span>{{ props.row.name }}</span>-->
                <!--</el-form-item>-->
                <!--<el-form-item label="所属店铺">-->
                  <!--<span>{{ props.row.shop }}</span>-->
                <!--</el-form-item>-->
                <!--<el-form-item label="商品 ID">-->
                  <!--<span>{{ props.row.id }}</span>-->
                <!--</el-form-item>-->
                <!--<el-form-item label="店铺 ID">-->
                  <!--<span>{{ props.row.shopId }}</span>-->
                <!--</el-form-item>-->
                <!--<el-form-item label="商品分类">-->
                  <!--<span>{{ props.row.category }}</span>-->
                <!--</el-form-item>-->
                <!--<el-form-item label="店铺地址">-->
                  <!--<span>{{ props.row.address }}</span>-->
                <!--</el-form-item>-->
                <!--<el-form-item label="商品描述">-->
                  <!--<span>{{ props.row.desc }}</span>-->
                <!--</el-form-item>-->
              <!--</el-form>-->
            <!--</template>-->
          <!--</el-table-column>-->
          <!--<el-table-column-->
            <!--label="商品 ID"-->
            <!--prop="id">-->
          <!--</el-table-column>-->
          <!--<el-table-column-->
            <!--label="商品名称"-->
            <!--prop="name">-->
          <!--</el-table-column>-->
          <!--<el-table-column-->
            <!--label="描述"-->
            <!--prop="desc">-->
          <!--</el-table-column>-->
        <!--</el-table>-->
        <!--&lt;!&ndash;<el-form :model="updateFoodRecommendStoreTypeObj">&ndash;&gt;-->
          <!--&lt;!&ndash;<el-form-item label="店铺编码:" :label-width="formLabelWidth">&ndash;&gt;-->
            <!--&lt;!&ndash;&lt;!&ndash;<el-input v-model="updateFoodRecommendStoreTypeObj.fd_is_ShopID" placeholder="请输入店铺编码"></el-input>&ndash;&gt;&ndash;&gt;-->
          <!--&lt;!&ndash;</el-form-item>&ndash;&gt;-->
        <!--&lt;!&ndash;</el-form>&ndash;&gt;-->
        <!--<div slot="footer" class="dialog-footer">-->
          <!--<el-button @click="updateDialog = false">取 消</el-button>-->
          <!--<el-button type="primary" @click="updateSubmit">确 定</el-button>-->
        <!--</div>-->
      <!--</el-dialog>-->
    </section>
  </div>
</template>
<script>
  import {mapGetters} from 'vuex'
  export default{
    name: '',
    data(){
      return {
        addDialog:false,
        // addOptions:{
        //   "loginUserID": "huileyou",
        //   "loginUserPass": "123",
        //   "operateUserID": "",
        //   "operateUserName": "",
        //   "pcName": "",
        //   "data": {
        //     // "fd_is_LocationID":"",    //推荐位置编码
        //     "fd_is_ShopID": "",   //推荐店铺编码
        //   }
        // },
        //初始化
        storeName:'',
        total:0,
        isLoading:false,
        updateDialog:false,
        formLabelWidth:'120px'
      }
    },
    computed: mapGetters([
      'initFoodReviewStoreInformationList',
    ]),
    created(){
      this.initData(name,1)
    },
    methods: {
      //分页
      handleCurrentChange(num){
        this.initData(this.storeName,num)
      },
      //初始化数据
      initData(name,page){
        let options = {
          "loginUserID": "huileyou",
          "loginUserPass": "123",
          "operateUserID": "",
          "operateUserName": "",
          "pcName": "",
          //"fd_sf_ID": "2",//店面编号
          //"fd_sf_TypeID": "4",//分类编号
          //"fd_sf_MansID": "32",//用餐人数编号
          "fd_sf_ProductName": name?name:"",//产品名称 like
          //"fd_sf_Provice": "四川省",//省
          //"fd_sf_City": "泸州市",//市
          //"priceFrom": "21",//人均价格大于
          //"priceTo":"50",//人均价格小于
          //"fd_sf_Phone": "1",//联系电话
          //"fd_sf_TradeID": "1",//供应商编码
          "page": page?page:"1",
          "rows":"10",
        };
        this.isLoading = true;
        this.$store.dispatch('initFoodReviewStoreInformation',options)
          .then(()=>{
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
        this.initData(this.storeName,"1")
      },
      // //添加
      // Add(){
      //   this.addDialog = true;
      //   this.$store.commit('setTranstionFalse');  //动画
      // },
      // //添加提交
      // addSubmit(){
      //   //actions提交的数据接口
      //   this.$store.dispatch('AddFoodRecommendStoreType',this.addOptions)
      //     .then((suc)=>{
      //       this.$notify({
      //         message: suc,
      //         type: 'success'
      //       });
      //       this.initData(this.imageName,1) //调用初始化
      //     },err=>{
      //       this.$notify({
      //         message: err,
      //         type: 'error'
      //       });
      //     });
      //   this.addDialog = false;
      // },
      // //修改
      // Update(id){
      //   this.updateDialog = true;
      //   this.$store.commit('setTranstionFalse');
      //   this.$store.commit('initUpdataFoodRecommendStoreType',id)   //initUpdataFoodRecommendStoreType是mutations中，用于把店铺的数据状态进行修改
      // },
      // //修改提交
      // updateSubmit(){
      //   let updateOptions = {
      //     "loginUserID": "huileyou",
      //     "loginUserPass": "123",
      //     "operateUserID": "操作员编码",
      //     "operateUserName": "操作员名称",
      //     "pcName": "",
      //     // "data": this.updateFoodRecommendStoreTypeObj  //state或者是getters中的修改美食推荐店铺
      //   };
      //   this.$store.dispatch('UpdateFoodRecommendStoreType',updateOptions)
      //     .then((suc)=>{
      //       this.$notify({
      //         message: suc,
      //         type: 'success'
      //       });
      //       this.initData(this.imageName,1)
      //     },err=>{
      //       this.$notify({
      //         message: err,
      //         type: 'error'
      //       });
      //     });
      //   this.updateDialog = false;
      // },
      // //删除
      // Delete(id){
      //   let deleteOptions = {
      //     "loginUserID": "huileyou",
      //     "loginUserPass": "123",
      //     "operateUserID": "操作员编码",
      //     "operateUserName": "操作员名称",
      //     "pcName": "",
      //     "data": {
      //       "fd_is_ID": id    //推荐店铺名称
      //     }
      //   };
      //   this.$store.dispatch('DeleteFoodRecommendStoreType',deleteOptions)
      //     .then((suc)=>{
      //       this.$notify({
      //         message: suc,
      //         type: 'success'
      //       });
      //       this.initData(this.imageName,1)
      //     },err=>{
      //       this.$notify({
      //         message: err,
      //         type: 'error'
      //       });
      //     });
      // }
    },
  }
</script>
<style scoped>

</style>


