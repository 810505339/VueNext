import {defineComponent, ref, computed, provide, readonly} from 'vue'
import {Layout} from "ant-design-vue";
import Tabs from './Tabs'
import Css from './layout.module.less'
import {RouterView} from 'vue-router'
import Theader from './Header'

const {Sider, Header, Footer, Content} = Layout


export default defineComponent(() => {
    const theme = ref<'light' | 'dark'>('light')
    provide('theme', theme)//注入主题

    const changeTheme = (Theme: 'light' | 'dark') => {
        theme.value = Theme
    }
    provide('changeTheme', changeTheme)

    const collapsed = ref<Boolean>(false) //侧边栏状态
    const logoStyle = computed(() => {
        return collapsed.value ? {width: '54px', height: '54px'} : {width: '44px', height: '44px'}
    })
    const logo = () => (
        <div class={Css.logo} style={{padding: collapsed.value ? '0' : '5px'}}><img src={require('@/assets/logo.png')}
                                                                                    style={logoStyle.value}/></div>)

    const renderHeader = () => (<Header class={{'ant-layout-sider-light': theme.value == 'light'}}>
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