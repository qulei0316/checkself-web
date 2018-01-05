<template>
  <div style="position:absolute; left:0; top:0px; width:100%; height:100% " class="backg">
    <div class="register">
      <span class="re-head">欢迎来到CheckSelf</span>
      <div  class="re-form ">
        <div class="re-info">
          <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="80px" class="demo-ruleForm">
            <el-form-item label="用户名" prop="name">
              <el-input v-model.number="ruleForm2.name"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="pass">
              <el-input type="password" v-model="ruleForm2.pass" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="确认密码" prop="checkPass">
              <el-input type="password" v-model="ruleForm2.checkPass" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="邮箱" prop="mail">
              <el-input v-model="ruleForm2.mail"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm('ruleForm2')">注册</el-button>
              <el-button @click="resetForm('ruleForm2')">重置</el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'register',
      methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$http.post('http://localhost:9000/checkself/user/regist',
            {
              username:this.ruleForm2.name,
              password:this.ruleForm2.pass,
              mail:this.ruleForm2.mail
            }).then((response)=>{
              this.$message({
                message: '注册成功，5秒后跳转至登录页面',
                type: 'success'
              });
              setTimeout(()=>{
                this.$router.push({path:'/'})
              }, 5000);
            },(response)=>{
              this.$message.error('注册失败，请重新注册')
            })
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      vali:function (value) {
        if (!this.ruleForm2.emailReg.test(value)){
          return '请输入正确的邮箱格式'
        }
        return undefined;
      }
    },
    data() {
      var checkname = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('用户名不得为空'));
        }
        setTimeout(() => {
          this.$http.post('http://localhost:9000/checkself/user/checkunique?username='+value)
          .then((response)=>{
            callback()
          },(response)=>{
            callback(new Error(response.body.message))
          });      
        }, 1000);
      };
      var checkmail = (rule, value, callback) => {
        let regFailMsg = this.vali(value);
        if (value === '') {
          return callback(new Error('邮箱不得为空'));
        }else if(regFailMsg){
          callback(new Error(regFailMsg))
        }else {
          callback();
        }
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm2.checkPass !== '') {
            this.$refs.ruleForm2.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm2.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        ruleForm2: {
          pass: '',
          checkPass: '',
          name: '',
          mail:'',
          emailReg:/^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z]{2,4}$/
        },
        rules2: {
          pass: [
            {required:true, validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { required:true, validator: validatePass2, trigger: 'blur' }
          ],
          name: [
            { required:true, validator: checkname, trigger: 'blur' }
          ],
          mail:[
            { required:true, validator: checkmail, trigger: 'blur'}
          ]
        }
      };
    }
  }
</script>

<style>
  .backg{
    background-image: url(../assets/bg.jpg);
    background-size: cover;
    overflow: auto;
  }

  .register{
    margin: 0 auto;
    height: 700px;
    width: 500px;
  }
  .re-head{
    display: block;
    position: relative;
    width: 100%;
    top:80px;
    text-align: center;
    font-size: 30px;
    color: wheat;
    font-family: Cambria;
  }
  .re-form{
    background: black;
    background-color: rgba(0,0,0,0.5);
    height: 400px;
    width: 100%;
    top:85px;
    position: relative;
    border-radius: 15px;
  }
  .re-info{
    position: absolute;
    top: 50px;
    left: 45px;
    height: 400px;
    width: 380px;
  }
</style>
