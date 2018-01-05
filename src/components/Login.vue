<template>
  <div style="position:absolute; left:0; top:0px; width:100%; height:100% " class="bg">
    <div class="lo-content">
      <div class="title"><span>欢迎来到CheckSelf</span></div>
      <div class="lo-form">
        <span class="lo-head">登陆</span>
        <div class="userInfo">
          <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" >
            <el-form-item label="用户名" prop="username">
              <el-input v-model="ruleForm.username"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
              <el-input type="password" v-model="ruleForm.password" @keyup.enter.native="login"></el-input>
            </el-form-item>
          </el-form>
        </div>
        <div class="button_login">
          <el-button type="primary" @click="login">登陆</el-button>
        </div>
        <div class="button_register">
          <el-button @click="regist">注册</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

  name: 'Login',
  data() {
    return {
      ruleForm: {
        username: '',
        password:''
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名或邮箱', trigger: 'blur' }
        ],
        password:[
          { required: true, message: '请输入密码', trigger: 'blur' }
        ]
    }
    }
  },
  methods:{
    login:function () {
       this.$http.post('http://localhost:9000/checkself/user/login',this.ruleForm)
         .then((reponse)=>{
             this.$router.push({path: '/index'})
         },(response)=>{
             this.$message.error(response.body.message);
         })
    },
    regist: function () {
      this.$router.push({path:'/register'})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .bg{
    background-image: url(../assets/bg.jpg);
    background-size: cover;
    overflow: auto;
  }
  .lo-content{
    margin: 0 auto;
    height: 700px;
    width: 500px;
  }
  .title{
    height: 180px;
    width: 100%;
  }
  .lo-form{
    background: black;
    background-color: rgba(0,0,0,0.5);
    height: 300px;
    width: 100%;
    position: relative;
    border-radius: 15px;
  }
  .title span{
    color: wheat;
    text-align: center;
    font-family: Cambria;
    font-size: 30px;
    padding-top: 130px;
    display: block;
  }
  .lo-head{
    text-align: center;
    font-family: 微软雅黑;
    font-size: 18px;
    color: white;
    display: block;
    height: 60px;
    line-height: 90px;
  }
  .userInfo{
    text-align: center;
    position: absolute;
    top: 90px;
    left: 30px;
    height: 120px;
    width: 380px;
  }
  .button_login{
    position: absolute;
    top: 240px;
    left: 148px;
    height: 50px;
    width: 150px;
  }
  .button_register{
    position: absolute;
    top: 240px;
    left: 290px;
    height: 50px;
    width: 150px;
  }
</style>
