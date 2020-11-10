import {defineComponent, inject, computed, Ref} from 'vue'
import {MenuFoldOutlined, MenuUnfoldOutlined} from '@ant-design/icons-vue'
import {Select} from 'ant-design-vue'
import SettingDrawer from "@/components/SettingDrawer/SettingDrawer";
import Css from './layout.module.less'


export default defineComponent({
    props: {
        collapsed: {
            type: Boolean,
            default: false
        }
    },
    setup(props, {emit}) {
        const theme: Ref<'dark' | 'light'> = inject('theme') as Ref<'dark' | 'light'>  //拿到主题

        const color = computed(() => {
            return theme.value == 'dark' ? {color: '#ffffff'} : {color: '#001529'}
        })
        const changeTheme: any = inject('changeTheme')  //修改的方法


        return () => (
            <div class={Css.header}>
                <span class={Css.icon} onClick={() => emit('update:collapsed', !props.collapsed)}>{(props.collapsed ?
                    <MenuFoldOutlined style={color.value}/> : <MenuUnfoldOutlined style={color.value}/>)}
                </span>
                <Select value={theme.value} onChange={(value: any) => changeTheme(value)}>
                    <Select.Option value={'dark'}>黑色</Select.Option>
                    <Select.Option value={'light'}>亮色</Select.Option>
                </Select>
                <SettingDrawer/>
            </div>
        )
    }
})

