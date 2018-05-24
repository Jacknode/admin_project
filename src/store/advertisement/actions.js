/**
 * Created by LiuXiang on 18/04/09.
 */
//import axios from "axios/index";

export default {
  /********************************************广告类型*********************************************************/
  //广告类型数据
  initAdTypeList({commit},data){
    return new Promise((relove, reject) => {
      axios.post('http://webservice.1000da.com.cn/AdviertiseType/Select',JSON.stringify(data),{
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }).then(data=>{
          var data = data.data;
          if(Number(data.resultcode)==200){
            commit('initAdTypeList',data.data)
            relove(Number(data.totalrows))
          }else{
            reject(data.resultcontent)
          }
        })
    })
  },
  //添加广告类型
  AddAdType(store,data){
    return new Promise((relove, reject) => {
      axios.post('http://webservice.1000da.com.cn/AdviertiseType/Insert',JSON.stringify(data),{
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }).then(data=>{
        var data = data.data;
        if(Number(data.resultcode)==200){
          relove(data.resultcontent)
        }else{
          reject(data.resultcontent)
        }
      })
    })
  },
  //修改广告类型
  UpdateAdType(store,data){
    return new Promise((relove, reject) => {
      axios.post('http://webservice.1000da.com.cn/AdviertiseType/Update',JSON.stringify(data),{
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }).then(data=>{
        var data = data.data;
        if(Number(data.resultcode)==200){
          relove(data.resultcontent)
        }else{
          reject(data.resultcontent)
        }
      })
    })
  },
  //删除广告类型
  deleteAdType(store,data){
    return new Promise((relove, reject) => {
      axios.post('http://webservice.1000da.com.cn/AdviertiseType/Delete',JSON.stringify(data),{
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }).then(data=>{
        var data = data.data;
        if(Number(data.resultcode)==200){
          relove(data.resultcontent)
        }else{
          reject(data.resultcontent)
        }
      })
    })
  },
  /********************************************广告收费方式*********************************************************/
  //查询广告收费方式
  initAdChargeWayList({commit},data){
    return new Promise((relove, reject) => {
      axios.post('http://webservice.1000da.com.cn//InComeWay/Select',JSON.stringify(data),{
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }).then(data=>{
        var data = data.data;
        if(Number(data.resultcode)==200){
          commit('initAdChargeWayList',data.data)
          relove(Number(data.totalrows))
        }else{
          reject(data.resultcontent)
        }
      })
    })
  },
  //添加广告收费方式
  addAdChargeWay(store,data){
    return new Promise((relove, reject) => {
      axios.post('http://webservice.1000da.com.cn/InComeWay/Insert',JSON.stringify(data),{
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }).then(data=>{
        var data = data.data;
        if(Number(data.resultcode)==200){
          relove(data.resultcontent)
        }else{
          reject(data.resultcontent)
        }
      })
    })
  },
  //修改收费方式
  UpdateAdChargeWay(store,data){
    return new Promise((relove, reject) => {
      axios.post('http://webservice.1000da.com.cn/InComeWay/Update',JSON.stringify(data),{
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }).then(data=>{
        var data = data.data;
        if(Number(data.resultcode)==200){
          relove(data.resultcontent)
        }else{
          reject(data.resultcontent)
        }
      })
    })
  },
  //删除广告收费方式
  deleteAdChargeWay(store,data){
    return new Promise((relove, reject) => {
      axios.post('http://webservice.1000da.com.cn/InComeWay/Delete',JSON.stringify(data),{
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }).then(data=>{
        var data = data.data;
        if(Number(data.resultcode)==200){
          relove(data.resultcontent)
        }else{
          reject(data.resultcontent)
        }
      })
    })
  },
  /********************************************广告位置*********************************************************/
  //查询广告位置
  initAdPosition({commit},data){
    return new Promise((relove, reject) => {
      axios.post('http://webservice.1000da.com.cn/PositionInfo/Select', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
        .then(data => {
          var data = data.data;
          if (Number(data.resultcode) == 200) {
            commit('initAdPosition',data.data)
            relove(Number(data.totalrows));
          } else {
            reject(data.resultcontent);
          }
        })
    })
  },
  //添加广告位置
  AddAdPosition(store,data){
    return new Promise((relove, reject) => {
      axios.post('http://webservice.1000da.com.cn/PositionInfo/Insert',JSON.stringify(data),{
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }).then(data=>{
        var data = data.data;
        if(Number(data.resultcode)==200){
          relove(data.resultcontent)
        }else{
          reject(data.resultcontent)
        }
      })
    })
  },
  //修改广告类型收费方式
  UpdateAdPosition(store,data){
    return new Promise((relove, reject) => {
      axios.post('http://webservice.1000da.com.cn/PositionInfo/Update',JSON.stringify(data),{
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }).then(data=>{
        var data = data.data;
        if(Number(data.resultcode)==200){
          relove(data.resultcontent)
        }else{
          reject(data.resultcontent)
        }
      })
    })
  },
  //删除广告类型收费方式
  DeleteAdPosition(store,data){
    return new Promise((relove, reject) => {
      axios.post('http://webservice.1000da.com.cn/PositionInfo/Delete',JSON.stringify(data),{
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }).then(data=>{
        var data = data.data;
        if(Number(data.resultcode)==200){
          relove(data.resultcontent)
        }else{
          reject(data.resultcontent)
        }
      })
    })
  },
  /********************************************广告申请*********************************************************/
  //查询广告申请
  initAdApply({commit},data){
    return new Promise((relove, reject) => {
      axios.post('http://webservice.1000da.com.cn/ApplayAdv/Select', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
        .then(data => {
          var data = data.data;
          if (Number(data.resultcode) == 200) {
            var resulte = data.data;
            for (var i = 0; i < resulte.length; i++) {
              resulte[i].sm_aa_Images = resulte[i].sm_aa_Image.split(',')
            }
            commit('initAdApply',resulte)
            relove(Number(data.totalrows));
          } else {
            reject(data.resultcontent);
          }
        })
    })
  },
  //广告申请上传图片
  adApplyUploadAdminImgs(store,data){
    //图片上传
    return new Promise((relove, reject) => {
      axios.post('http://image.1000da.com.cn/PostImage/PostToService', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
        .then(data => {
          relove(data.data)
        })
    })
  },
  //添加广告申请
  AddAdApply(store,data){
    return new Promise((relove, reject) => {
      axios.post('http://webservice.1000da.com.cn/ApplayAdv/Insert',JSON.stringify(data),{
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }).then(data=>{
        var data = data.data;
        if(Number(data.resultcode)==200){
          relove(data.resultcontent)
        }else{
          reject(data.resultcontent)
        }
      })
    })
  },
  //修改广告申请
  UpdateAdApplyObj(store,data){
    return new Promise((relove, reject) => {
      axios.post('http://webservice.1000da.com.cn/ApplayAdv/Update',JSON.stringify(data),{
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }).then(data=>{
        var data = data.data;
        if(Number(data.resultcode)==200){
          relove(data.resultcontent)
        }else{
          reject(data.resultcontent)
        }
      })
    })
  },
  //删除广告申请
  DeleteAdApply(store,data){
    return new Promise((relove, reject) => {
      axios.post('http://webservice.1000da.com.cn/ApplayAdv/Delete',JSON.stringify(data),{
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }).then(data=>{
        var data = data.data;
        if(Number(data.resultcode)==200){
          relove(data.resultcontent)
        }else{
          reject(data.resultcontent)
        }
      })
    })
  },
  /********************************************广告类型收费方式*********************************************************/
  //广告类型收费方式
  initAdTypeChargeMode({commit},data){
    return new Promise((relove, reject) => {
      axios.post('http://webservice.1000da.com.cn/AdTypeInComeWay/Select',JSON.stringify(data),{
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }).then(data=>{
        var data = data.data;
        if(Number(data.resultcode)==200){
          commit('initAdTypeChargeMode',data.data)
          relove(Number(data.totalrows))
        }else{
          reject(data.resultcontent)
        }
      })
    })
  },
  //增加广告类型收费方式
  AddAdTypeChargeMode(store,data){
    return new Promise((relove, reject) => {
      axios.post('http://webservice.1000da.com.cn/AdTypeInComeWay/Insert',JSON.stringify(data),{
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }).then(data=>{
        var data = data.data;
        if(Number(data.resultcode)==200){
          relove(data.resultcontent)
        }else{
          reject(data.resultcontent)
        }
      })
    })
  },
  //修改广告类型收费方式
  UpdateAdTypeChargeMode(store,data){
    return new Promise((relove, reject) => {
      axios.post('http://webservice.1000da.com.cn/AdTypeInComeWay/Update',JSON.stringify(data),{
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }).then(data=>{
        var data = data.data;
        if(Number(data.resultcode)==200){
          relove(data.resultcontent)
        }else{
          reject(data.resultcontent)
        }
      })
    })
  },
  //删除广告类型收费方式
  DeleteAdTypeChargeMode(store,data){
    return new Promise((relove, reject) => {
      axios.post('http://webservice.1000da.com.cn/AdTypeInComeWay/Delete',JSON.stringify(data),{
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }).then(data=>{
        var data = data.data;
        if(Number(data.resultcode)==200){
          relove(data.resultcontent)
        }else{
          reject(data.resultcontent)
        }
      })
    })
  }
}

