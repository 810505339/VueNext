import NProgress from 'nprogress';
import 'nprogress/nprogress.css'
import {Router} from "vue-router";


export default function loading(router: Router) {
    NProgress.configure({easing: 'ease', speed: 500, showSpinner: false})
    router.beforeEach((to, from, next) => {
        NProgress.start();
        next()
    })

    router.afterEach(() => {
        NProgress.done();
    });
}