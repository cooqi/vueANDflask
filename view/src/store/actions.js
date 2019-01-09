import * as types from './type'
export default {
  updateLoadingStatus:({commit},data)=>{
    commit(types.IS_LOADING,data)
  }
}
