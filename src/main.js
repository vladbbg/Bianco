import Vue from 'vue'
import Vuelidate from 'vuelidate'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import dateFilter from './filters/date.filter'
import Loader from './components/Loader.vue'
import {BootstrapVue, IconsPlugin} from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { initializeApp } from "firebase/app";
import {getAuth, onAuthStateChanged } from "firebase/auth";

// Initialize Firebase




Vue.use(Vuelidate)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.filter('date', dateFilter)
Vue.component("Loader",Loader)


Vue.config.productionTip = false

const firebaseConfig = {
  apiKey: "AIzaSyCX73UZ5YK3G_7E97eiTCZ5rIW-VC_59-o",
  authDomain: "my-project-c592d.firebaseapp.com",
  databaseURL: "https://my-project-c592d-default-rtdb.firebaseio.com",
  projectId: "my-project-c592d",
  storageBucket: "my-project-c592d.appspot.com",
  messagingSenderId: "342559031688",
  appId: "1:342559031688:web:eab59d10ed18b479773a3d",
  measurementId: "G-K25X5T1YW4"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
let app1;
onAuthStateChanged(auth, () => {
  if(!app1){
    app1 = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }

})
