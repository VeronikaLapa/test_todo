import { createApp } from 'vue'
import App from './App.vue'
import {store} from './store/store';

store.subscribe((mutation, state) => {
    localStorage.setItem('store', JSON.stringify(state));
});
const app = createApp(App);
app.use(store);
store.dispatch('loadStore');
app.mount('#app')
