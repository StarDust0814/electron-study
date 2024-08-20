<template>
    <div>Home首页</div>
</template>

<script setup>
import { useStore } from '@store'
let store = useStore()
console.log(store.num)
</script>

<style lang="scss" scoped></style>
