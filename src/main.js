import Vue from "vue";
import App from "./App.vue";
// import plugin_teste from "plugin_teste_2";
import plugin_teste from "plugin_teste_3/dist/index.esm";

Vue.config.productionTip = false;
Vue.use(plugin_teste);

new Vue({
  render: h => h(App)
}).$mount("#app");
