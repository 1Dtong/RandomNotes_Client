<template>
    <div class="login">
        <h1>登录</h1>
        <div class="login-wrapper">
            <div class="avater">
                <img src="https://img0.baidu.com/it/u=1691000662,1326044609&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500"
                    alt="">
            </div>
            <van-form @submit="onSubmit">
                <van-cell-group inset>
                    <van-field v-model="username" name="username" label="用户名" placeholder="用户名"
                        :rules="[{ required: true, message: '请填写用户名' }]" />
                    <van-field v-model="password" type="password" name="password" label="密码" placeholder="密码"
                        :rules="[{ required: true, message: '请填写密码' }]" />
                </van-cell-group>
                <div style="margin: 16px;">
                    <van-button round block type="primary" native-type="submit">
                        登录
                    </van-button>
                </div>
            </van-form>


        </div>

        <p class="register" @click="() => router.push('/register')">新用户？点击去注册</p>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import axios from '@/api/index.js';
import { useRouter } from 'vue-router';

const username = ref('');
const password = ref('');
const router = useRouter(); // 得到一个路由对象，而route得到一个路由对象，内容是跳转页面的url

// 登录
const onSubmit = async (values) => {
    const res = await axios.post('/user/login', {
        username: values.username,
        password: values.password,
    })
    localStorage.setItem('userInfo', JSON.stringify(res.data));
    localStorage.setItem('token', res.token);
    console.log(res, 111111);
    router.push('/noteclass'); // 跳转页面——首页
    // .then((res) => {
    //     console.log(res);
    // })
    // .catch((err) => {
    //     console.log(err);
    // });
};

</script>

<style lang="less" scoped>
.login {
    width: 100vw;
    height: 100vh;
    background-color: #fff;
    padding: 0 0.3rem;
    box-sizing: border-box;
    overflow: hidden; // 让login变为bfc容器
    position: relative;

    h1 {
        height: 0.6933rem;
        text-align: center;
        font-size: 0.48rem;
        margin-top: 1.12rem;
    }

    .login-wrapper {
        width: 7.44rem;
        height: 10.77rem;
        border: 1px solid rgba(187, 187, 187, 1);
        margin: 0 auto; // 块级元素水平居中
        margin-top: 1.7rem;
        border-radius: 0.3rem;
        box-shadow: 0 0 0.5333rem rgba(170, 170, 170, 1); // 阴影分别在x 、 y轴的偏移量 + 阴影范围 + 阴影范围宽度(1rem)

        .avater {
            width: 2.4rem;
            height: 2.4rem;
            margin: 1rem auto 0.77rem;
            border-radius: 50%;
            overflow: hidden;

            img {
                width: 100%;
            }
        }
    }
    .register {
        position: absolute;
        bottom: 30px;
        left: 50%;
        transform: translateX(-50%);
        font-size: 0.374rem;
        color: rgba(16, 16, 16, 1);
    }
}

:deep(.van-cell__title.van-field__label) {
    width: 45px;
}
</style>