<template>
    <div class="login">
        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span>后台管理系统</span>
            </div>
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                <el-form-item label="用户名" prop="name">
                    <el-input v-model="ruleForm.username"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="name">
                    <el-input v-model="ruleForm.password"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
                </el-form-item>
            </el-form>
        </el-card>

    </div>
</template>

<script>
import { login } from "@/api/api";
export default {
    name: "HelloWorld",
    props: {
        msg: String,
    },
    data() {
        return {
            ruleForm: {
                username: "",
                password: "",
            },
            rules: {},
        };
    },
    mounted() {
        console.info(this.service);
    },
    methods: {
        submitForm() {
            // this.service.post("/login", this.ruleForm).then((res) => {
            //     console.info(res);
            // });
            login(this.ruleForm).then((res) => {
                console.info(res);
                let result = res.data;
                sessionStorage.setItem("token", result.token);
                console.info("1");
                console.info("2");
            });
        },
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.login {
    width: 100%;
    height: 100%;
    position: absolute;
    background: #409eff;
    .clearfix {
        font-size: 28px;
        text-align: center;
    }
    .box-card {
        width: 450px;
        margin: 200px auto;
        .el-button {
            width: 100%;
        }
    }
}
</style>
