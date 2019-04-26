import Vue from "vue";
import App from "./App.vue";
import router from "./router.js";
import { Validator } from "vee-validate";
import VeeValidate from "vee-validate";
import { default as constants } from "./myConstants";
import { uniqueValidate } from "./customValidators";

//import 'vuetify/dist/vuetify.min.css' // Ensure you are using css-loader

Vue.config.productionTip = false;

/*
import Vuetify from 'vuetify'

Vue.use(Vuetify) */

Vue.use(VeeValidate);

uniqueValidate();

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
