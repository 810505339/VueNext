import {createApp} from 'vue'
import App from './App'
import router from './router'
import store from './store'
import NPLoading from "@/utils/NProgressLoading"
import 'ant-design-vue/dist/antd.less'

const app = createApp(App)
app.use(store).use(router)
router.isReady().then(() => {
    app.mount('#app')
})
NPLoading(router)