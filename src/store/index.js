import Vue from 'vue'
import Vuex from 'vuex'
// import actions from './Agencies/actions'
// import mutations from './Agencies/mutations'

import old from './old'
import advertisement from './advertisement'
import ticket from './ticket' //门票
import hotel from './hotel' //酒店
import food from './food' //美食

Vue.use(Vuex);
const debug = process.env.NODE_ENV !== 'production'


export default new Vuex.Store({
  modules:{
    old,
    advertisement,
    ticket,
    hotel,
    food
  },
  // strict: debug,
})
