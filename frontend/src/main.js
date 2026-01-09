import { createPinia } from "pinia";
import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import axios from "axios";
import { router } from "./router";

axios.defaults.baseURL = "http://localhost:8000";
axios.defaults.withCredentials = true;
axios.defaults.withXSRFToken = true;

const pinia = createPinia();
const app = createApp(App);
app.use(router);
app.use(pinia);
app.mount("#app");
