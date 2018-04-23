/**
 * Created by leibo on 18/4/4.
 */
import axios from 'axios'

export default {
  /*****************************************美食推荐店铺**********************************************/
  //查询美食推荐店铺
  initIntroduceShopInfo({commit},data){
    return new Promise((relove,reject)=>{
      axios.post('http://webservice.1000da.com.cn/IntroduceShop/Select',JSON.stringify(data),{
        headers:{
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }).then(data=>{
        var data=data.data;
        if(Number(data.resultcode==200)){
          commit('initIntroduceShopInfo',data.data);
          relove(data.resultcontent);
        }else{

          reject(data.resultcontent)
        }
      })
    })
  },
  //添加推荐店铺
  addFoodRecommendStoreType(store,data){
    return new Promise((relove,reject)=>{
      axios.post('http://webservice.1000da.com.cn/IntroduceShop/Insert',JSON.stringify(data),{
        headers:{
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
        .then(data=>{
          var data=data.data;
          console.log(data)
          if(Number(data.resultcode)==200){
            relove(Number(data.resultcontent));
          }else{
            reject(data.resultcontent)
          }
        })
    })
  },
  //修改推荐店铺
  UpdateFoodRecommendStoreType(store,data){
    return new Promise((relove,reject)=>{
      axios.post('http://webservice.1000da.com.cn/IntroduceShop/Update',JSON.stringify(data),{
        headers:{
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
        .then(data=>{
          var data=data.data;
          console.log(data)
          if(Number(data.resultcode)==200){
            relove(Number(data.resultcontent));
          }else{
            reject(data.resultcontent)
          }
        })
    })
  },
  //删除推荐店铺
  DeleteFoodRecommendStoreType(store,data){
    return new Promise((relove,reject)=>{
      axios.post('http://webservice.1000da.com.cn/IntroduceShop/Delete',JSON.stringify(data),{
        headers:{
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
        .then(data=>{
          var data=data.data;
          if(Number(data.resultcode)==200){
            relove(data.resultcontnet)
          }else{
            reject(data.resultcontent)
          }
        })
    })
  },


  /*****************************************美食属性**********************************************/
  // 新增属性表
  AddFoodAttributeListType(store,data){
    return new Promise((relove,reject)=>{
      axios.post('http://webservice.1000da.com.cn/Property/Insert',JSON.stringify(data),{
        headers:{
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }).then(data=>{
        var data=data.data;
        if(Number(data.resultcode==200)){
          // commit(' AddFoodAttributeListType',data.data);
          relove(data.resultcontent);
        }else{
          reject(data.resultcontent)
        }
      })
    })
  },
//删除美食属性
  DeleteFoodAttributeType(store,data){
    return new Promise((relove,reject)=>{
      axios.post('http://webservice.1000da.com.cn/Property/Delete',JSON.stringify(data),{
        headers:{
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }).then(data=>{
        var data=data.data;
        if(Number(data.resultcode==200)){
          // commit('DeleteFoodAttributeType',data.data);
          relove(data.resultcontent);
        }else{
          reject(data.resultcontent)
        }
      })
    })
  },
  //查询美食属性
  initFoodAttributeListType({commit},data){
    return new Promise((relove,reject)=>{
      axios.post('http://webservice.1000da.com.cn/Property/Select',JSON.stringify(data),{
        headers:{
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }).then(data=>{
        var data=data.data;

        if(Number(data.resultcode==200)){
          commit('initFoodAttributeListType',data.data);
          relove(Number(data.totalrows));
        }else{
          reject(data.resultcontent)
        }
      })
    })
  },
  //修改美食属性
  initUpdateFoodAttributeType(store,data){
    return new Promise((relove,reject)=>{
      axios.post('http://webservice.1000da.com.cn/Property/Update',JSON.stringify(data),{
        headers:{
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      })
        .then(data=>{
          var data=data.data;
          if(Number(data.resultcode)==200){
            relove(data.resultcontent);
          }
          else{
            reject(data.resultcontent)
          }
        })
    })
  },
  /*****************************************美食店面**********************************************/
  //查询店面信息
  initFoodReviewStoreInformation({commit},data){
    return new Promise((relove,reject)=>{
      axios.post('http://webservice.1000da.com.cn/StoreFront/Select',JSON.stringify(data),{
        headers:{
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }).then(data=>{
        var data=data.data;

        if(Number(data.resultcode==200)){
          commit('initFoodReviewStoreInformation',data.data);
          relove(Number(data.totalrows));
        }else{
          reject(data.resultcontent)
        }
      })
    })
  },
}
