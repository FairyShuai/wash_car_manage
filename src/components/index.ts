import SvgIcon from './SvgIcon/index.vue';

const allGlobalCompent: any = { SvgIcon };

export default {
  install(app: any) {
    Object.keys(allGlobalCompent).forEach((key: string) => {
      app.component(key, allGlobalCompent[key]);
    });
  },
};
