import { createApp } from "vue";
import { createMemoryHistory, createRouter } from "vue-router";
import './assets/css/index.scss'
import App from "./App.vue";
import Home from "./components/Home.vue";
import Doc from './components/Doc.vue'

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