import {defineComponent, VNode} from 'vue'
import {Menu} from "ant-design-vue";
import {RouteRecordRaw, useRouter} from 'vue-router'

const {SubMenu, Item} = Menu

export default defineComponent(() => {

    const {getRoutes} = useRouter()
    const router = getRoutes()
    console.log(router)
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
                title: () => {
                    item.meta?.title
                }
            }}>{renderSub(item.children)}</SubMenu>) : renderItem(item)
        })

    }
    return () => (<Menu>
        {renderSub(router)}
    </Menu>)
})