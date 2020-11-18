import {defineComponent, createVNode, inject, computed} from 'vue'
import {Menu} from "ant-design-vue";
import {RouteRecordRaw, useRouter, useRoute, useLink} from 'vue-router'


const {SubMenu, Item} = Menu

export default defineComponent({
    setup() {
        const theme: any = inject<"light" | "dark">('theme') //拿到theme

        const {options, push} = useRouter()
        const {name, matched} = useRoute()


        const router = (options.routes[0]?.children) as RouteRecordRaw[]  //获取tab
        const openKeys = matched.filter(item => item.name != name).map(item => item.name) //默认打开的keys

        //渲染item
        const renderItem = (childRouter: RouteRecordRaw) => {
            return (<Item key={childRouter.name as string}>
                <span>{childRouter.meta?.title}</span>
            </Item>)
        }
        //渲染subItem
        const renderSub = (Router: Array<RouteRecordRaw>) => {
            return Router.map((item) => {
                if (item?.meta?.hidden)
                    return
                return item?.children?.length ? (<SubMenu key={item.name as string} v-slots={{
                    title: () => (<>
                        {createVNode(item.meta?.icon)}
                        <span>{item.meta?.title}</span>
                    </>)
                }}>{renderSub(item.children)}</SubMenu>) : renderItem(item)
            })

        }
        return () => (
            <Menu onClick={async ({key}) => {
                await push({name: key})
            }} defaultSelectedKeys={[name]} defaultOpenKeys={openKeys} theme={theme.value}
                  mode={'inline'}>
                {renderSub(router)}
            </Menu>)
    }
})