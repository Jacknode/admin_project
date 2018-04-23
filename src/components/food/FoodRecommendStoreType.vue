<template>
  <div>
    <!--美食推荐店铺-->
    <section id="wrap">
      <h1 class="userClass">推荐店铺类型</h1>
      <el-col :span="24" class="formSearch">
        <el-form :inline="true">
          <el-form-item>
            <span>推荐店铺类型筛选:</span>
          </el-form-item>
          <el-form-item>
            <el-input type="text" v-model="imageName" auto-complete="off" placeholder="店铺编码" size="small"></el-input>
            <el-select v-model="addOptions.data.fd_is_ID" placeholder="请选择店铺名称">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.name"
                :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="search" size="small">查询</el-button>
            <el-button type="primary" @click="Add" size="small">新增</el-button>
          </el-form-item>
        </el-form>
      </el-col>

      <!--数据展示-->
      <el-table
        :data="foodRecommendStoreTypeList"
        highlight-current-row
        v-loading="isLoading"
        style="width: 100%">
        <el-table-column
          align="center"
          label="推荐店面编码"
          prop="fd_is_ID">
        </el-table-column>
         <el-table-column
          align="center"
          label="店铺名称"
          prop="fd_sf_ProductName">
        </el-table-column>
        <el-table-column
          align="center"
          label="店铺介绍"
          prop="fd_sf_Introduce">
        </el-table-column>
        <el-table-column
          align="center"
          label="店铺图片"
          prop="fd_pi_ImageUrl"
        >
          <template slot-scope="scope">
            <img height="50" width="100" v-lazy="scope.row.fd_pi_ImageUrl" alt="">
          </template>
        </el-table-column>

        <el-table-column label="操作" align="center">
          <template slot-scope="scope">
            <el-button
              size="mini"
              type="primary"
              @click="Update(scope.row.fd_is_ID)">修改
            </el-button>
            <el-button
              v-show="true"
              size="mini"
              type="danger"
              @click="Delete(scope.row.fd_is_ID)">删除
            </el-button>
          </template>
        </el-table-column>
      </el-table>

      <!--添加推荐店铺名称-->
      <el-dialog title="添加店铺" :visible.sync="addDialog">
        <el-form :model="addOptions">
    <!--      <el-form-item label="推荐店铺:" :label-width="formLabelWidth">
            <el-select v-model="addOptions.data.fd_is_ID" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.name"
                :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>-->
          <el-form-item label="店面编号:" :label-width="formLabelWidth">
            <el-input v-model="addOptions.data.fd_is_ShopID" placeholder="请输入编号"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="addDialog = false">取 消</el-button>
          <el-button type="primary" @click="addSubmit">确 定</el-button>
        </div>
      </el-dialog>

      <!--修改属性名称-->
      <el-dialog title="修改美食属性名称" :visible.sync="updateDialog">
        <el-form :model="updateFoodRecommendStoreTypeObj">
          <el-form-item label="美食属性:" :label-width="formLabelWidth">
            <el-select v-model="fd_py_ParentID" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.name"
                :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="属性名称:" :label-width="formLabelWidth">
            <el-input v-model="updateFoodRecommendStoreTypeObj.propertyName" placeholder="请输入属性名称"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="updateDialog = false">取 消</el-button>
          <el-button type="primary" @click="updateSubmit">确 定</el-button>
        </div>
      </el-dialog>
    </section>
  </div>
</template>
<script>
  import {mapGetters} from 'vuex'
  export default{
    data(){
      return {

        fd_py_ParentID:'',
        options:[
          {
            name:'美食类型',
            value:'1'
          },
          {
            name:'用餐人数',
            value:'28'
          },
        ],
        addDialog:false,
        addOptions:{
          "loginUserID": "huileyou",
          "loginUserPass": "123",
          "operateUserID": "",
          "operateUserName": "",
          "pcName": "",
          "data": {
            "fd_is_ShopID": "",//店面编号
          }
        },
        //初始化
        imageName:'',
        total:0,
        isLoading:false,
        updateDialog:false,
        formLabelWidth:'120px'
      }
    },
    computed: mapGetters([
      'foodRecommendStoreTypeList',
      'updateFoodRecommendStoreTypeObj',

    ]),
    created(){
      this.initData('',1)
    },
    methods: {
      //分页

      handleCurrentChange(num){
        this.initData(this.imageName,num)
      },

      initData(name){
        let options = {
          "loginUserID": "huileyou",
          "loginUserPass": "123",
          "operateUserID": "",
          "operateUserName": "",
          "pcName": "",
          //"fd_is_ID": "2",//推荐店面编码
          "fd_is_ShopID": name?name:"",//店面编号
        };
        this.isLoading = true;
        this.$store.dispatch('initIntroduceShopInfo',options)
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
        this.initData(this.imageName,1)
      },


      //添加
      Add(){
        this.addDialog = true;
        this.$store.commit('setTranstionFalse');
      },
      //添加提交
      addSubmit(){
        //actions提交的数据接口
        this.$store.dispatch('addFoodRecommendStoreType',this.addOptions)
          .then((suc)=>{
            this.$notify({
              message: suc,
              type: 'success'
            });
            this.initData(this.imageName,1) //调用初始化
          },err=>{
            this.$notify({
              message: err,
              type: 'error'
            });
          });
        this.addDialog = false;
      },
      //修改
      Update(id){
        this.updateDialog = true;
        this.$store.commit('setTranstionFalse');
        this.$store.commit('initUpdateFoodAttributeType',id)   //initUpdataFoodRecommendStoreType是mutations中，用于把店铺的数据状态进行修改
      },
      //修改提交
      updateSubmit(){
        let updateOptions = {
          "loginUserID": "huileyou",
          "loginUserPass": "123",
          "operateUserID": "操作员编码",
          "operateUserName": "操作员名称",
          "pcName": "",

//         data: this.updateFoodAttributeTypeObj  //state或者是getters中的修改美食推荐店铺
          "data": {

            "fd_py_ID": this.updateFoodAttributeTypeObj.propertyID,//编号
            "fd_py_Name": this.updateFoodAttributeTypeObj.propertyName,//名称
            "fd_py_ParentID": this.fd_py_ParentID,//父编码

          }
        };
        updateOptions.data.letterName = ''
        this.$store.dispatch('initUpdateFoodAttributeType',updateOptions)
          .then((suc)=>{
            this.$notify({
              message: suc,
              type: 'success'
            });
            this.initData(this.imageName,1)//**************/当前页数
          },err=>{
            this.$notify({
              message: err,
              type: 'error'
            });
          });
        this.updateDialog = false;
      },
      //删除
      Delete(id){
        let deleteOptions = {
          "loginUserID": "huileyou",
          "loginUserPass": "123",
          "operateUserID": "操作员编码",
          "operateUserName": "操作员名称",
          "pcName": "",
          "data": {
            "fd_py_ID": id
          }
        };
//        DeleteFoodAttributeType
        this.$store.dispatch('DeleteFoodAttributeType',deleteOptions)
          .then((suc)=>{
            this.$notify({
              message: suc,
              type: 'success'
            });
            this.initData(this.imageName,1)
          },err=>{
            this.$notify({
              message: err,
              type: 'error'
            });
          });
      }
    }
  }
</script>
<style scoped>

</style>
