/**
 * Created by leibo on 18/4/2.
 */
export default {
  initHotelImageType(state,data){
    state.hotelImageTypeList = data;
  },
  initUpdateHotelImageType(state,id){
    state.updateHotelImageTypeObj = state.hotelImageTypeList.filter(item=>{
      if(item.ht_it_ID==id){
        return true;
      }
      return false;
    })[0]
  },
  initHotelRecommendType(state,data){
    state.hotelRecommendTypeList = data;
  },
  initHotelRecommendTypeAll(state,data){
    state.hotelRecommendTypeAllList = data;
  },
  initUpdateHotelRecommendType(state,id){
    state.updateHotelRecommendTypeObj = state.hotelRecommendTypeList.filter(item=>{
      if(item.ht_it_ID==id){
        return true;
      }
      return false;
    })[0]
  },
  initHotelThemeCategory(state,data){
    state.hotelThemeCategoryList = data;
  },
  initUpdateHotelThemeCategory(state,id){
    state.updateHotelThemeCategoryObj = state.hotelThemeCategoryList.filter(item=>{
      if(item.ht_tt_ThemeID==id){
        item.ht_tt_IsHot = item.ht_tt_IsHot+'';
        return true;
      }
      return false;
    })[0]
  }
}
