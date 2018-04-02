<template>
  <div>
    <section id="wrap">
      <h1 class="userClass">酒店图片类型</h1>
      <el-col :span="24" class="formSearch">
        <el-form :inline="true">
          <el-form-item>
            <span>图片类型名称筛选:</span>
          </el-form-item>
          <el-form-item>
            <el-input type="text" v-model="imageName" auto-complete="off" placeholder="图片类型名称" size="small"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="search" size="small">查询</el-button>
            <el-button type="primary" @click="Add" size="small">新增</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </section>
  </div>
</template>
<script>
  import {mapGetters} from 'vuex'
  export default{
    name: '',
    data(){
      return {
        imageName:''
      }
    },
    computed: mapGetters([]),
    created(){
    },
    methods: {
      //查询
      search(){

      },
      //添加
      Add(){

      }
    },
  }
</script>
<style scoped>

</style>
