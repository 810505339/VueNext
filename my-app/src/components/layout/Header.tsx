import {defineComponent, inject, computed, Ref} from 'vue'
import {MenuFoldOutlined, MenuUnfoldOutlined, SwapOutlined} from '@ant-design/icons-vue'
import Css from './layout.module.less'
import {Avatar} from "ant-design-vue";


export default defineComponent({
    props: {
        collapsed: {
            type: Boolean,
            default: false
        }
    },
    setup(props, {emit, slots}) {
        const theme: Ref<'dark' | 'light'> = inject('theme') as Ref<'dark' | 'light'>  //拿到主题

        const color = computed(() => {
            return theme.value == 'dark' ? {color: '#ffffff'} : {color: '#001529'}
        })

        const renderRightBox = () => (<div class={Css.rightBox}>
            <div class={['action', Css.userBox]}>
                <Avatar/>
                <span>二狗</span>
            </div>
            <div><SwapOutlined/></div>
        </div>)

        return () => (
            <div class={Css.header}>
                <span class={Css.icon} onClick={() => emit('update:collapsed', !props.collapsed)}>{(props.collapsed ?
                    <MenuFoldOutlined style={color.value}/> : <MenuUnfoldOutlined style={color.value}/>)}
                </span>
                {slots.default?.()}
                {renderRightBox()}
            </div>
        )
    }
})

