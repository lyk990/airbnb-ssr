import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import ElementPlus, { ElMessage } from "element-plus";
import "element-plus/dist/index.css";
import i18n from "./language/i18n";
const app = createApp(App);
app.config.globalProperties.$message  = ElMessage
app.use(router);
app.use(i18n)
app.use(ElementPlus);
app.mount("#app");
