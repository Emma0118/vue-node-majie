<style lang="scss">
  .login-container {
    /*box-shadow: 0 0px 8px 0 rgba(0, 0, 0, 0.06), 0 1px 0px 0 rgba(0, 0, 0, 0.02);*/
    -webkit-border-radius: 5px;
    border-radius: 5px;
    -moz-border-radius: 5px;
    background-clip: padding-box;
    margin: 180px auto;
    width: 350px;
    padding: 35px 35px 15px 35px;
    background: #fff;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
    .title {
      margin: 0px auto 40px auto;
      text-align: center;
      color: #505458;
    }
    .remember {
      margin: 0px 0px 35px 0px;
    }
  }

</style>
<template>
  <el-form :model="ruleForm2" :rule="rule2" ref="ruleForm2" label-position="left" label-width="0px" class="demo-ruleFom login-container">
    <h3 class="title">系统登陆</h3>
    <el-form-item prop="account">
      <el-input type="text" v-model="ruleForm2.account" auto-complete="off" placeholder="帐号">
      </el-input>
    </el-form-item>
    <el-form-item prop="checkpass">
      <el-input type="password" v-model="ruleForm2.checkPass" auto-complete="off" placeholder="密码"></el-input>
    </el-form-item>
    <el-checkbox v-model="checked" checked class="remember">记住密码</el-checkbox>
    <el-form-item style="width:100%">
      <el-button type="primary" style="width:100%" @click.native.prevent="handleSubmit2" :loading="logining">登录</el-button>
    </el-form-item>
  </el-form>

</template>

<script>
  import { requestLogin } from '../api/index'
  export default {
  data () {
    return {
      logining: false,
      ruleForm2: {
        account: 'admin',
        checkPass: '123456'
      },
      rule2: {
        account: [
          {
            required: true,
            message: '请输入帐号',
            trigger: 'blur'
          }
        ],
        checkPass: [
          {
            required: true,
            message: '请输入密码',
            trigger: 'blur'
          }
        ]
      },
      checked: true
    }
  },
  methods: {
    handleSubmit2 () {
      const scope = this
      scope.$refs.ruleForm2.validate(valid => {
        if (valid) {
          scope.logining = true
          let loginParams = {
            username: scope.ruleForm2.account,
            password: scope.ruleForm2.checkPass
          }

          requestLogin(loginParams).then(data => {
            scope.logining = false
            // debuggers
            let { msg, code, user } = data
            if (code !== 200) {
              scope.$message({
                message: msg,
                type: 'error'
              })
            } else {
                sessionStorage['user'] = JSON.stringify(user)
                scope.$router.push('/table')
            }
          })
        } else {
            console.log('error submit!!')
            return false
        }
      })
    }
  }
}
</script>
