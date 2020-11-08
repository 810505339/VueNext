import {defineComponent} from 'vue'
import {useRouter} from 'vue-router'

export default defineComponent(() => {

    const router = useRouter().getRoutes()
    console.log(router)
    return () => (<div>
        List
    </div>)
})