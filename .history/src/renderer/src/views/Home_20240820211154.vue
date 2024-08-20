<template>
  <div>Home首页</div>
  <button @click="login">登录</button>
  <button @click="wss">消息列表</button>
  <button @click="down">下载中心</button>
</template>

<script setup>
import { useStore } from '@store'
import { loginByJson } from '@api/login'
let store = useStore()
console.log(store.num)

const login = async () => {
  let res = await loginByJson({
    password: '1899ddee9d860a0c452dd91844cb7a1c', //密码（需要使用AES加密）
    username: '6a89e60b1231d61d4bf89a08e4fc6229', //用户名（需要使用AES加密）
    key: '', //图形验证码中随机UUID
    captcha: '2f3j'
  })
  console.log(res)
}

// 渲染进程向主进程通信
const wss = () => {
  electron.ipcRenderer.invoke('ws', {
    name: 'web'
  })
}

const down = () => {
  electron.ipcRenderer.invoke('ws', {
    name: 'down'
  })
}
</script>

<style lang="scss" scoped></style>
