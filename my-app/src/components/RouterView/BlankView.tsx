import {defineComponent, Transition} from 'vue'
import {RouterView} from 'vue-router'


export default defineComponent(() => {
    return () => (
        <div>
            <RouterView v-slots={{
                default: ({Component}: any) => <Transition name="fade" mode="out-in">{Component}</Transition>
            }}/>
        </div>)
})