import {defineComponent} from 'vue'
import {Table} from "ant-design-vue";
import FormLayout from "@/views/form/FormLayout";
import TableSearch from "@/views/form/TableSearch";


export default defineComponent({
    name: 'file-table',
    setup() {
        const header = () => <TableSearch/>
        const columns: unknown[] = [{
            dataIndex: 'name',
            key: 'name',
            slots: {title: 'customTitle', customRender: 'name'},
            render: {
                customTitle: () => <div>name</div>,
                name: ({text}: any) => <div>{text}</div>
            }
        },
            {
                title: 'Address',
                dataIndex: 'address',
                key: 'address',
            }
        ]
        const data: unknown[] = [{
            key: '1',
            name: 'John Brown',
            age: 32,
            address: 'New York No. 1 Lake Park',
            tags: ['nice', 'developer'],
        }]
        console.log(columns.map((item: any) => item.render))
        const table = () => (
            <Table columns={columns} dataSource={data}/>
        )


        return () => (<FormLayout v-slots={{
            header: () => header(),
            table: () => table()
        }}>
        </FormLayout>)

    }
})