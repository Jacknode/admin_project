/**
 * Created by leibo on 18/4/4.
 */
export default {
  //推荐店铺
  initIntroduceShopInfo(state,data){
    state.foodRecommendStoreTypeList = data;
  },
  //修改店铺
  initUpdataFoodRecommendStoreType(state,id){
    state.updataFoodRecommendStoreTypeObj = state.foodRecommendStoreTypeList.filter(item=>{
      if(item.fd_is_ID==id){
        return ture;
      }
      return false;
    })[0]
  },

  //添加美食属性
  addFoodRecommendStoreType(state,data){
    state.addFoodAttributeListType = data;
  },

  //删除美食属性
  deleteFoodAttributeListType(state,data){
    state.deleteFoodAttributeListType = data;
  },

//查询美食属性
  initFoodAttributeListType(state,data){
    state.foodAttributeTypeList= data;
  },

  //修改美食属性
  initUpdateFoodAttributeType(state,id){
    state.updateFoodAttributeTypeObj = state.foodAttributeTypeList.filter(item=>{
      if(item.propertyID==id){
        return true;
      }else{ return false;}

    })[0]

  },
  /*****************************************美食店面**********************************************/
  //查询美食店面
  initFoodReviewStoreInformation(state,data){
    state.initFoodReviewStoreInformationList= data;
  },

}

