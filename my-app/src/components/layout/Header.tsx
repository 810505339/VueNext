import {defineComponent, inject} from 'vue'
import {MenuOutlined, MenuUnfoldOutlined} from '@ant-design/icons-vue'
import {Select} from 'ant-design-vue'
import Css from './layout.module.less'

export default defineComponent({
    props: {
        collapsed: Boolean
    },
    setup(props, {emit}) {
        const theme = inject('theme') //拿到主题
        return () => (
            <div class={Css.header}>

                <div onClick={() => emit('update:collapsed', !props.collapsed)}>{(props.collapsed ?
                    <MenuOutlined style={{color: '#ffffff'}}/> : <MenuUnfoldOutlined/>)}</div>
                <Select v-model={[theme, 'value']}>
                    <Select.Option value={'light'}>黑色</Select.Option>
                    <Select.Option value={'dark'}>亮色</Select.Option>
                </Select>
            </div>
        )
    }
})

