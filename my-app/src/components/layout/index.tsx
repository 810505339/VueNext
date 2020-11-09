import {defineComponent, ref, computed, provide, readonly} from 'vue'
import {Layout} from "ant-design-vue";
import Tabs from './Tabs'
import Css from './layout.module.less'
import {RouterView} from 'vue-router'
import Theader from './Header'

const {Sider, Header, Footer, Content} = Layout


export default defineComponent(() => {
    const theme = ref<'light' | 'dark'>('light')
    provide<'light' | 'dark'>('theme', theme.value)//注入主题
    const collapsed = ref<Boolean>(false) //侧边栏状态
    const logoStyle = computed(() => {
        return collapsed.value ? {width: '64px', height: '64px'} : {width: '44px', height: '44px'}
    })
    const logo = () => (
        <div class={Css.logo} style={{padding: collapsed.value ? '0' : '10px'}}><img src={require('@/assets/logo.png')}
                                                                                     style={logoStyle.value}/></div>)

    const renderHeader = () => (<Header>
        <Theader v-model={[collapsed.value, 'collapsed']}/>
    </Header>)

    return () => (<Layout class={Css.layout}>
        <Sider v-model={[collapsed.value, 'collapsed']} theme={theme.value} collapsible>
            {logo()}
            <Tabs/>
        </Sider>
        <Layout>
            {renderHeader()}
            <Content>
                <RouterView/>
            </Content>
            <Footer></Footer>
        </Layout>
    </Layout>)
})