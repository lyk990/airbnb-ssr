<template>
  <el-button>{{t('message.home')}}</el-button>
  <el-button @click="addDB('elephant')">增</el-button>

</template>

<script lang="ts" setup name="index">
import { getCurrentInstance } from 'vue'
import { useI18n } from 'vue-i18n'
import IndexDB from '../../utils/indexDB'
const { t } = useI18n()
const { proxy }: any = getCurrentInstance()
const airbnbDB = new IndexDB('airbnb')
airbnbDB.openStore('elephant', 'id', ['nose', 'ear'])
const value1 = ''

// 增和改
function addDB(storName: string) {
  airbnbDB.updateItem(storName,{
  nose: '33m',
  ear: 'big'
})
}

</script>
<style lang="less" scoped></style>
