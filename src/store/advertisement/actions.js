import axios from "axios/index";

export default {
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
}
