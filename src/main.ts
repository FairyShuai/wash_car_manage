import { createApp } from 'vue';
import './style.css';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
// @ts-expect-error
import zhCn from 'element-plus/dist/locale/zh-cn.mjs';
import App from '@/App.vue';

const app = createApp(App);
app.use(ElementPlus, {
  locale: zhCn,
});
console.log(import.meta.env);
app.mount('#app');
