/**
 * Created by liuxiang on 18/3/30.
 */
export default  {
  /********************************************广告类型*********************************************************/
  initAdTypeList(state,data){
    state.adTypeList = data;
  },
  initUpdateAdType(state,id){
    state.updateAdTypeObj = state.AdTypeList.filter(item=>{
      if(item.sm_at_ID==id){
        return true
      }
      return false
    })[0]
  },
  /********************************************广告收费方式*********************************************************/
  initAdChargeWayList(state,data){
    state.adChargeWayList = data;
  },
  /********************************************广告位置*********************************************************/
  initAdPosition(state,data){
    state.adPositionList = data;
  },
  initUpdateAdPositionObj(state,id){
    state.updateAdPositionObj = state.adPositionList.filter(item=>{
      if(item.sm_pi_ID==id){
        return true
      }
      return false
    })[0]
  },
  /********************************************广告申请*********************************************************/
  initAdApply(state,data){
    state.adApplyList = data;
  },
  initUpdateAdApply(state,id){
    state.updateAdApplyObj = state.adApplyList.filter(item=>{
      if(item.sm_aa_ID==id){
        return true
      }
      return false
    })[0]
  },
  /********************************************广告类型收费方式*********************************************************/
  initAdTypeChargeMode(state,data){
    state.adTypeChargeModeList = data;
  },
  initUpdateAdTypeChargeMode(state,id){
    state.updateAdTypeChargeModeObj = state.adTypeChargeModeList.filter(item=>{
      if(item.sm_aicw_ID==id){
        return true
      }
      return false
    })[0]
  }
};


