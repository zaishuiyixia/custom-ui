import { createApp } from "vue";
import { createMemoryHistory, createRouter } from "vue-router";
import './assets/css/index.scss'
import App from "./App.vue";
import Home from "./views/Home.vue";
import Doc from './views/Doc.vue'

const history = createMemoryHistory();
const router = createRouter({
  history,
  routes: [
    { path: '/', component: Home },
    { path: '/doc', component: Doc }
  ]
});

const app = createApp(App);
app.use(router)
app.mount("#app")
