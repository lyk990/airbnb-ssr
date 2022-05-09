<template>
  <el-button>{{t('message.home')}}</el-button>
  <el-button @click="addDB('elephant')">增</el-button>
  <el-button @click="deleteDB('elephant', 2)">删除</el-button>
  <el-button @click="getObjectStore('elephant')">查询所有数据</el-button>
  <el-button @click="getObjectStoreItem('elephant', 3)">查询某条数据</el-button>

</template>

<script lang="ts" setup name="index">
import { getCurrentInstance } from 'vue'
import { useI18n } from 'vue-i18n'
import IndexDB from '../../utils/indexDB'
import { fetchRoomList, fetchElephant } from '../../api'
const { t } = useI18n()
const { proxy }: any = getCurrentInstance()
const airbnbDB = new IndexDB('airbnb') 
airbnbDB.openStore('elephant', 'id', ['nose', 'ear'])
const value1 = ''
// 真实接口
function getRoomList() {
  fetchRoomList().then(res => {
    console.log(res)
  })
}
getRoomList()
// mock接口
function getElephant() {
  fetchElephant()
}
getElephant()
// 增和改
function addDB(storName: string) {
    airbnbDB.updateItem(storName,{
    nose: '33m',
    ear: 'big'
  })
}
// 删除
function deleteDB(storeName: string, key: string | number) {
    airbnbDB.deleteItem(storeName,key)
}
// 查询所有数据
function getObjectStore(storeName: string) {
    airbnbDB.getList(storeName)
}
// 查询某一条数据
function getObjectStoreItem(storeName: string, key: number | string) {
    airbnbDB.getItem(storeName, key)
}
</script>
<style lang="less" scoped></style>
