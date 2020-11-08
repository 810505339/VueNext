import {defineComponent} from 'vue'
import {Layout} from "ant-design-vue";
import Tabs from './Tabs'
import Css from './layout.module.less'
import {RouterView} from 'vue-router'

const {Sider, Header, Footer, Content} = Layout

export default defineComponent(() => {
    return () => (<Layout class={Css.layout}>
        <Sider>
            <div>Logo</div>
            <Tabs/>
        </Sider>
        <Layout>
            <Header></Header>
            <Content>
                <RouterView/>
            </Content>
            <Footer></Footer>
        </Layout>
    </Layout>)
})