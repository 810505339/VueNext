import {defineComponent, Transition} from 'vue'
import {RouterView} from 'vue-router'


export default defineComponent(() => {
    return () => (<RouterView v-slots={{default: ({Compoent}: any) => <Transition    name="slide-fade" >{Compoent}</Transition>}}/>)
})