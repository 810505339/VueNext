import {defineComponent} from 'vue'
import {Table} from "ant-design-vue";
import FormLayout from "@/views/form/FormLayout";
import TableSearch from "@/views/form/TableSearch";


export default defineComponent({
    name: 'file-table',
    setup() {
        const header = () => <TableSearch/>

        return () => (<FormLayout v-slots={{header: () => header()}}>
        </FormLayout>)
    }
})