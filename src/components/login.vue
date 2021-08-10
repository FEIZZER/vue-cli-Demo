<!--
 * @Author: xiao-jie
 * @Date: 2021-07-30 17:32:49
 * @LastEditors: xiao-jie
 * @LastEditTime: 2021-08-10 14:00:00
 * @Description: 
-->
<template>
    <div class="login_container">
        <div class="login_box" >
            <div class="logo">
                <img src="../assets/logo.png" alt="">
            </div>
            <el-form ref="loginFormRef" :model="loginForm" :rules="loginRules" label-width="20%" class="form_area" >
                <el-form-item prop="username"  label="用户名">
                    <el-input v-model="loginForm.username" prefix-icon="el-icon-user"></el-input>
                </el-form-item>
                <el-form-item prop="password" label="密码">
                    <el-input v-model="loginForm.password" prefix-icon="el-icon-lock" type="password"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="login">登录</el-button>
                    <el-button type="info" @click="resetLoginForm">重置</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import {Message} from 'element-ui'
export default {
    name:'Login',
    data(){
        return{
            loginForm: {
                username: 'admin',
                password: '123456',
            },
            loginRules:{
                username: [
                    {required: true, message: '请输入用户名', trigger: "blur"},
                    {max: 20, min: 3, message: '用户名长度在3~20之间', trigger: "blur"}
                ],
                password: [
                    {required: true, message:'请输入密码', trigger: 'blur'},
                    {max: 20, min:6, message: '密码长度在6~20之间', trigger: 'blur'}
                ]
            }
        }
    },
    methods: {
        resetLoginForm() {
            this.$refs.loginFormRef.resetFields()
        },
        login() {
            this.$refs.loginFormRef.validate(res => {
                if (!res)  return;
                axios.post('/login', this.$data.loginForm)
                .then((response) => {
                    if (response.data.meta.status == 200) {
                        this.$message({
                            message: '登录成功',
                            type: 'success'
                        })
                        window.sessionStorage.setItem('token', response.data.data.token)
                        this.$router.push('/home')
                    }else {
                        this.$message({
                            message: response.data.meta.msg,
                            type: 'error'
                        })
                    }
                    
                })
                .catch(function(error) {
                    console.error(error)
                })
            })
        }
    }
    
}
</script>

<style lang="css" scoped>
    .login_container{
        height: 100%;
        background-color: #2b4b6b;
    }
    .login_box{
        width: 450px;
        background-color: #ffffff;
        border-radius: 3px;
        margin: auto;
        margin-top: 300px;
        border: #eeeeee 1px solid;
    }
    .logo{
        transform: translateY(-50%);
        height: 130px;
        width: 130px;
        border-radius: 50%;
        border: 1px #eeeeee solid;
        margin: auto;
        padding: 10px;
        background-color: #eeeeee;
    }
    .logo img{
        height: 100%;
        width: 100%;
        border-radius: 50%;
        background-color: #eeeeee;
        box-shadow: 0 0 10px #dddddd; 
    }
    .form_area{
        padding-right: 15px;
    }
</style>
