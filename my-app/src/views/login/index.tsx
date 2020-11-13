import {defineComponent} from 'vue'
import {useRouter} from 'vue-router'
import {Form, Input, Button} from 'ant-design-vue'
import Css from './login.module.less'
import {UserOutlined, LockOutlined} from '@ant-design/icons-vue'


const {Item} = Form
const {Password} = Input
export default defineComponent({
    name: 'login',
    setup() {
        const {push} = useRouter()
        const loginBtn = async () => {
            await push({name: 'home'})
        }

        return () => (
            <div class={Css.wrapper}>
                <div class={Css.login}>
                    <Form class={Css.form} wrapperCol={{span: 24}}>
                        <div class={Css.header}>
                            <img src={require('@/assets/logo.png')}/>
                        </div>
                        <Item>
                            <Input placeholder="请输入账号" v-slots={{prefix: () => <UserOutlined/>}} size={"large"}/>
                        </Item>
                        <Item>
                            <Password placeholder="请输入密码" v-slots={{prefix: () => <LockOutlined/>}} size={"large"}/>
                        </Item>
                        <Button block type={'primary'} size={"large"} onClick={loginBtn}>登录</Button>
                    </Form>
                </div>
            </div>
        )
    }
})