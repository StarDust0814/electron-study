<template>
    <div>Home首页</div>
    <button @click="jump">按钮</button>
</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
const jump = () => {
    router.push('/list')
}
</script>

<style lang="scss" scoped></style>
