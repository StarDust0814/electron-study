<template>
  <div>Home首页</div>
  <button @click="login">登录</button>
</template>

<script setup>
import { useStore } from '@store'
import { loginByJson } from '@api/login'
let store = useStore()
console.log(store.num)
</script>

<style lang="scss" scoped></style>
