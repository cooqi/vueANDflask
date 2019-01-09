<template>
  <div id="app">
    <input type="text" v-model="username" placeholder="用户名">
    <input type="text" v-model="password" placeholder="密码">
    <p @click="login">提交</p>

    <p style="color: red">
      {{token}}
      {{msg}}
    </p>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
      username:'',
      password:'',
      token:'',
      msg:''
    }
  },
  methods:{
    login(){
      let _this=this;
      this.$api.post('login',{username:this.username,password:this.password})
        .then(function (res) {
          if(res.code==200){
            _this.token=res.token
            _this.msg=res.msg
          }else{
            console.log(res)
            _this.msg=res.msg
          }
        })
    }
  },
  mounted(){

  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
