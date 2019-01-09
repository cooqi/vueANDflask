import {
  IS_LOADING
} from './type';



const state={
  isLoading:false,
};
const  mutations={
  [IS_LOADING](state,data){
    state.isLoading=data
  }
};

const getters={

  isLoading(state){
    return state.isLoading
  }
};

export default {
  state,
  mutations,
  getters
}
