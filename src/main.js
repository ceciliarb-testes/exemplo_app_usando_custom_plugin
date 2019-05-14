import Vue from "vue";
import App from "./App.vue";
import plugin_teste from "plugin_teste_2";

Vue.config.productionTip = false;
Vue.use(plugin_teste);

new Vue({
  render: h => h(App)
}).$mount("#app");
