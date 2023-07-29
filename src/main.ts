import { createApp } from 'vue';
import './style.css';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
// @ts-expect-error
import zhCn from 'element-plus/dist/locale/zh-cn.mjs';
import App from '@/App.vue';
import 'virtual:svg-icons-register';
import globalComponent from '@/components';

const app = createApp(App);
app.use(ElementPlus, {
  locale: zhCn,
});

app.use(globalComponent);
// 全局注册组件
app.mount('#app');
