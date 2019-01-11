
<template>
  <div id="app">
   <div class="login">
     <input type="text" v-model="username" placeholder="用户名">
     <input type="text" v-model="password" placeholder="密码">
     <p @click="login">登录</p>

     <p style="color: red">
       {{token}}
       {{msg}}
     </p>
   </div>

    <div class="register">
      <input type="text" v-model="res_name" placeholder="用户名">
      <input type="text" v-model="res_password" placeholder="密码">
      <p @click="register">注册</p>

      <p style="color: blue">
        {{reg_msg}}
      </p>
    </div>

    <div class="list">
      <input type="text" v-model="keyword"><button @click="search">查询</button>
      <ul>
        <li v-for="item in user">{{item.id}}-{{item.username}}-{{item.time}} <span class="del" @click="del(item.id)">删除</span> <span class="edit" @click="editPop(item.id,item.username)">编辑</span></li>
      </ul>

      <div class="editbox" v-show="popEdit">
        <input type="text" v-model="editName">
        <button @click="edit">确定</button>
      </div>
    </div>
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
      msg:'',
      reg_msg:'',
      res_name:'',
      res_password:'',
      user:[],
      keyword:'',
      popEdit:false,
      editName:'',
      editID:''
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
    },
    register(){
      let _this=this;
      this.$api.post('register',{username:this.res_name,password:this.res_password})
        .then(function (res) {
          if(res.code==200){
            _this.reg_msg=res.msg
            _this.userList()
          }else{
            console.log(res)
            _this.reg_msg=res.msg
          }
        })
    },
    userList(){
      let _this=this;
      let pra={
        keyword:this.keyword,
        pageIndex:1,
        pageSize:10
      }
      this.$api.get('userList',pra)
        .then(function (res) {
          if(res.code==200){
            _this.user=res.data
          }else{
            console.log(res)
            _this.reg_msg=res.msg
          }
        })
    },
    search(){
      this.userList()
    },
    del(id){
      let _this=this
      this.$api.post('listDel',{id:id})
        .then(function (res) {
          if(res.code==200){
            _this.userList()
          }else{
            console.log(res)
          }
        })
    },
    editPop(id,name){
      this.popEdit=true
      this.editName=name
      this.editID=id
    },
    edit(){
      let _this=this
      this.$api.post('listEdit',{id:this.editID,username:this.editName})
        .then(function (res) {
          if(res.code==200){
            _this.userList()
            _this.popEdit=false
          }else{
            console.log(res)
          }
        })
    }
  },
  mounted(){
    this.userList()
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
  .login{background: #f7f7f7;padding: 20px;margin: 20px auto}
  .register{background: orangered;padding: 20px;color: #fff;}
  .list{background: #ccc;padding: 20px;margin: 20px auto}
.list li,.list ul{list-style: none;padding: 0;text-align: left}
  .del{color: red;cursor: pointer;margin-left: 20px;}
  .edit{color: blue;cursor: pointer;margin-left: 20px;}
</style>
