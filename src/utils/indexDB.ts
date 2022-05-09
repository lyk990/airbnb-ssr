export default class DB {
  private dbName: string; // 数据库名称
  private db:any
  constructor(dbName: string) {
    this.dbName = dbName
  }
  public openStore(storeName: string, keyPath: string, indexs?: Array<string>) {
    const request = window.indexedDB.open(this.dbName, 2);
    request.onsuccess = (event: any) => {
      console.log(event)
      this.db = event.target.result
      console.log('数据库打开成功')
    }
    request.onerror = (error) => {
      console.log('数据库打开失败')
    }
    request.onupgradeneeded = (event) => {
      console.log('数据库升级成功')
      const { result }: any = event.target
      const store = result.createObjectStore(storeName, {autoIncrement: true, keyPath})
      if(indexs && indexs.length > 0) {
        indexs.map((v: string) => {
          store.createIndex(v, v, { unique: true })
        })
      }
      store.transaction.oncomplete = (event: any) => {
        console.log('创建对象仓库成功')
      }
      console.log(event)
    }
  }
  // 新增/修改数据库数据
  updateItem(storeName: string, data: any) {
    const store = this.db.transaction([storeName], 'readwrite').objectStore(storeName)
    const request = store.put(data)
    request.onsuccess = (event: any) => {
      console.log('数据写入成功')
      console.log(event)
    }
    request.onerror = (event: any) => {
      console.log('数据写入失败')
      console.log(event)
    }
  }
}
