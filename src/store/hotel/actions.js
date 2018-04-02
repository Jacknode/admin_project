/**
 * Created by leibo on 18/4/2.
 */
import axios from 'axios'

export default {
  //酒店图片类型
  initHotelImageType({commit},data){
    return new Promise((relove, reject) => {
      axios.post('http://webservice.1000da.com.cn/ImageType/Select',JSON.stringify(data),{
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }).then(data=>{
        var data = data.data;
        if(Number(data.resultcode)==200){
          commit('initHotelImageType',data.data)
          relove(Number(data.totalrows))
        }else{
          reject(data.resultcontent)
        }
      })
    })
  },
  //添加酒店图片类型
  AddHotelImageType(store,data){
    return new Promise((relove, reject) => {
      axios.post('http://webservice.1000da.com.cn/ImageType/Insert',JSON.stringify(data),{
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
  //修改酒店图片类型
  UpdateHotelImageType(store,data){
    return new Promise((relove, reject) => {
      axios.post('http://webservice.1000da.com.cn/ImageType/Update',JSON.stringify(data),{
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
  //删除酒店图片类型
  DeleteHotelImageType(store,data){
    return new Promise((relove, reject) => {
      axios.post('http://webservice.1000da.com.cn/ImageType/Delete',JSON.stringify(data),{
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
  //酒店推荐类型
  initHotelRecommendType({commit},data){
    return new Promise((relove, reject) => {
      axios.post('http://webservice.1000da.com.cn/IntroduceType/Select',JSON.stringify(data),{
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }).then(data=>{
        var data = data.data;
        if(Number(data.resultcode)==200){
          commit('initHotelRecommendType',data.data)
          relove(Number(data.totalrows))
        }else{
          reject(data.resultcontent)
        }
      })
    })
  },
  //酒店推荐类型所有
  initHotelRecommendTypeAll({commit},data){
    return new Promise((relove, reject) => {
      axios.post('http://webservice.1000da.com.cn/IntroduceType/Select',JSON.stringify(data),{
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }).then(data=>{
        var data = data.data;
        if(Number(data.resultcode)==200){
          commit('initHotelRecommendTypeAll',data.data)
          relove(data.resultcontent)
        }else{
          reject(data.resultcontent)
        }
      })
    })
  },
  //上传图片
  hotelUploadAdminImgs(store,data){
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
  //添加酒店推荐类型
  AddHotelRecommendType(store,data){
    return new Promise((relove, reject) => {
      axios.post('http://webservice.1000da.com.cn/IntroduceType/Insert',JSON.stringify(data),{
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
  //修改酒店推荐类型
  UpdateHotelRecommendType(store,data){
    return new Promise((relove, reject) => {
      axios.post('http://webservice.1000da.com.cn/IntroduceType/Update',JSON.stringify(data),{
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
  //删除酒店推荐类型
  DeleteHotelRecommendType(store,data){
    return new Promise((relove, reject) => {
      axios.post('http://webservice.1000da.com.cn/IntroduceType/Delete',JSON.stringify(data),{
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
  //初始化酒店主题类别
  initHotelThemeCategory({commit},data){
    return new Promise((relove, reject) => {
      axios.post('http://webservice.1000da.com.cn/HotelThemeType/Select',JSON.stringify(data),{
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }).then(data=>{
        var data = data.data;
        if(Number(data.resultcode)==200){
          commit('initHotelThemeCategory',data.data)
          relove(Number(data.totalrows))
        }else{
          reject(data.resultcontent)
        }
      })
    })
  },
  //添加酒店主题类别
  AddHotelThemeCategory(store,data){
    return new Promise((relove, reject) => {
      axios.post('http://webservice.1000da.com.cn/HotelThemeType/Insert',JSON.stringify(data),{
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
  //修改酒店主题类别
  UpdateHotelThemeCategory(store,data){
    return new Promise((relove, reject) => {
      axios.post('http://webservice.1000da.com.cn/HotelThemeType/Update',JSON.stringify(data),{
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
  //删除酒店主题类别
  DeleteHotelThemeCategory(store,data){
    return new Promise((relove, reject) => {
      axios.post('http://webservice.1000da.com.cn/HotelThemeType/Delete',JSON.stringify(data),{
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
