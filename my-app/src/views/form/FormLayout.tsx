import {defineComponent} from 'vue'


export default defineComponent({
    name: 'form-layout',
    setup(_, {slots}) {

        return () => (<div>
            {slots.header?.()}
            {slots.table?.()}
        </div>)
    }
})