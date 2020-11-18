import {defineComponent} from 'vue'
import {Table} from "ant-design-vue";
import FormLayout from "@/views/form/FormLayout";

export default defineComponent({
    name: 'file-table',
    setup() {
        const header = () => <div>aaa</div>

        return () => (<FormLayout v-slots={{header: () => header()}}>
        </FormLayout>)
    }
})