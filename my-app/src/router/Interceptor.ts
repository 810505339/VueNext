import router from "@/router";
import store from '@/store'

const whiteRouter = ['/login']
router.beforeEach((to, from, next) => {
    console.log(to, from)
    if (whiteRouter.includes(to.path)) {
        next()
    } else {
        store.state.User.token == '' ? next('/login') : next()
    }
})

