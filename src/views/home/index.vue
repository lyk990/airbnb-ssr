<template>
  <el-button>213132123123</el-button>
</template>

<script lang="ts" setup name="index">
import { getCurrentInstance } from 'vue'
const { proxy }: any = getCurrentInstance()
console.log(proxy)
</script>
<style lang="less" scoped></style>
