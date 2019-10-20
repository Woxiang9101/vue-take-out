/*
vuex 的 mutations 模块
*/
import {
  MODIFY_LOCATION,
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPS
} from './mutation-types'

export default {
  [MODIFY_LOCATION](state, location) {
    state.latitude = location.latitude;
    state.longitude = location.longitude;
  },
  [RECEIVE_ADDRESS](state, {address}) {
    state.address = address
  },
  [RECEIVE_CATEGORYS](state, {categorys}) {
    state.categorys = categorys
  },
  [RECEIVE_SHOPS](state, {shops}) {
    state.shops = shops
  },
}
