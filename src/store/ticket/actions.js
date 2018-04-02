/**
 * Created by leibo on 18/3/30.
 */
import axios from 'axios'

export default {
    //门票景点主题
  initTicketTheme({commit},data){
    return new Promise((relove, reject) => {
      axios.post('http://webservice.1000da.com.cn/TmThemeType/GetThemeTypeList',JSON.stringify(data),{
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }).then(data=>{
        var data = data.data;
        if(Number(data.resultcode)==200){
          commit('initTicketTheme',data.data)
          relove(Number(data.totalrows))
        }else{
          reject(data.resultcontent)
        }
      })
    })
  },
  //添加门票景点主题
  AddTicketTheme(store,data){
    return new Promise((relove, reject) => {
      axios.post('http://webservice.1000da.com.cn/TmThemeType/Insert',JSON.stringify(data),{
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
  //修改门票景点主题
  UpdateTicketTheme(store,data){
    return new Promise((relove, reject) => {
      axios.post('http://webservice.1000da.com.cn/TmThemeType/Update',JSON.stringify(data),{
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
  //删除门票景点主题
  DeleteTicketTheme(store,data){
    return new Promise((relove, reject) => {
      axios.post('http://webservice.1000da.com.cn/TmThemeType/Delete',JSON.stringify(data),{
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
