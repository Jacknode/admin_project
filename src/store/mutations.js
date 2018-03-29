/**
 * Created by leibo on 18/2/6.
 */
import getters from './getters'

const state = {
//初始化动画
  transtionActive: {
    isActive: false,
    isRotateInDownRight: false
  },
  adminTradeGoodList:[],//商户信息
  adminBusinessInformationList:[],
  updateAdminBusinessInformationObj:{},
  adminSupplierList:[],//供应商信息
  adminProductAuditList:[],//供应商产品审核
  adminAgentsList:[],//代理商信息
  adminVendorProfitList:[],//供应商利润
  partnershipTypeList:[],//合作类型
  proviceList:[],//省
  cityList:[],//市
  updateAdminVendorProfitObj:{},//修改供应商利润obj
  adminAgentsProfitList:[],//代理商利润
  updateAdminAgentsProfitObj:{},//代理商利润obj
  adminHuileyouReturnList:[],//惠乐游收益
  adminIntegralWeightList:[],//积分权重
  updateAdminIntegralWeightObj:{},//修改积分权重obj
  adminIntegralTypeList:[],//积分类型
  updateAdminIntegralTypeObj:{},//修改积分类型obj
};

const mutations = {
//初始化动画
  setTranstionFalse(state) {
    state.transtionActive = {
      isActive: false,
      isRotateInDownRight: false
    }
  },
  oPTranstionFalse() {
    state.transtionActive = {
      isActive: !state.transtionActive.isActive,
      isRotateInDownRight: !state.transtionActive.isRotateInDownRight
    }
  },
  initAdminTradeGoodList(state, data) {
    state.adminTradeGoodList = data;
  },
  initAdminBusinessInformation(state, data) {
    state.adminBusinessInformationList = data;
  },
  initUpdateAdminBusinessInformationObj(state, id) {
    state.updateAdminBusinessInformationObj = state.adminBusinessInformationList.filter(item => {
      if (item.ts_tb_UserID == id) {
        return true;
      }
      return false;
    })[0]
  },
  initAdminSupplier(state,data){
    state.adminSupplierList = data;
  },
  initAdminProductAudit(state,data){
    state.adminProductAuditList = data;
  },
  initAdminAgents(state,data){
    state.adminAgentsList = data
  },
  initAdminVendorProfit(state,data){
    state.adminVendorProfitList = data;
  },
  initPartnershipType(state,data){
    state.partnershipTypeList = data;
  },
  initProviceList(state,data){
    state.proviceList = data;
  },
  initCityList(state,data){
    state.cityList = data;
  },
  initUpdateAdminVendorProfitObj(state,id){
    state.updateAdminVendorProfitObj = state.adminVendorProfitList.filter(item=>{
      if(item.sm_apf_ID == id){
        return true
      }
      return false;
    })[0]
  },
  initAdminAgentsProfit(state,data){
    state.adminAgentsProfitList = data;
  },
  initUpdateAdminAgentsProfitObj(state,id){
    state.updateAdminAgentsProfitObj = state.adminAgentsProfitList.filter(item=>{
      if(item.sm_al_ID ==id){
        return true;
      }
      return false
    })[0]
  },
  initAdminHuileyouReturn(state,data){
    state.adminHuileyouReturnList = data;
  },
  initAdminIntegralWeight(state,data){
    state.adminIntegralWeightList = data;
  },
  initUpdateAdminIntegralWeightObj(state,id){
    state.updateAdminIntegralWeightObj = state.adminIntegralWeightList.filter(item=>{
      if(item.sm_hm_ID == id){
        return true;
      }
      return false
    })[0]
  },
  initAdminIntegralType(state,data){
    state.adminIntegralTypeList = data;
  },
  initUpdateAdminIntegralTypeObj(state,id){
    state.updateAdminIntegralTypeObj = state.adminIntegralTypeList.filter(item=>{
      if(item.sm_ust_ID==id){
        return true;
      }
      return false;
    })[0]
  }
};
export default {
  getters,
  state,
  mutations
}
