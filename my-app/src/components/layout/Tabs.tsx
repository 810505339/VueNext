import {defineComponent, createVNode, inject} from 'vue'
import {Menu} from "ant-design-vue";
import {RouteRecordRaw, useRouter} from 'vue-router'


const {SubMenu, Item} = Menu

export default defineComponent(() => {
    const theme = inject<"light" | "dark">('theme') //拿到theme
    console.log(theme)
    const {options} = useRouter()
    const router = options.routes;
    const renderItem = (childRouter: RouteRecordRaw) => {
        return (<Item>
            {childRouter.meta?.title}
        </Item>)
    }
    const renderSub = (Router: Array<RouteRecordRaw>) => {
        return Router.map((item) => {
            if (item.meta?.hidden)
                return
            return item.children?.length ? (<SubMenu v-slots={{
                title: () => (<>
                    {createVNode(item.meta?.icon)}
                    <span>{item.meta?.title}</span>
                </>)

            }}>{renderSub(item.children)}</SubMenu>) : renderItem(item)
        })

    }
    return () => (<Menu theme={theme}>
        {renderSub(router)}
    </Menu>)
})