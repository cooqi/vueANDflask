import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
router.afterEach((to, from, next) => {
  /*let loadingInstance = Loading.service();
  loadingInstance.close();*/
  //window.scrollTo(0,0);
});

let routerGo = function(path, params, isquery) {
  if (isquery) {
    router.push({ path: path, query: params ? params : {} }); //$routerGo('/index',{}，true)  url、带参数
  } else {
    router.push({ name: path, params: params ? params : {} }); //$routerGo('/index',{})  url不带参数
  }
};

export {
  router,
  routerGo
};
