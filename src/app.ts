import Vue from "vue";
import App from "./components/App.vue";
import router from "./router";
import store from "./vuex/store";
// import BootstrapVue from 'bootstrap-vue'

 // Vue.use(BootstrapVue)

const app = new Vue({
  router,
  store  ,
  components: { App },
});

export default {
  app,
  router,
  store,
};
