import {defineComponent, reactive} from 'vue'
import {useRouter} from 'vue-router'
import {Form, Input, Button} from 'ant-design-vue'
import Css from './login.module.less'
import {UserOutlined, LockOutlined} from '@ant-design/icons-vue'
import {loginApi} from '@/api/login'
import {useStore} from 'vuex'

const {Item} = Form
const {Password} = Input


export default defineComponent({
    name: 'login',
    setup() {
        const {replace} = useRouter()
        const user = reactive({
            user_name: '',
            pass_word: ''
        })  //用户
        const loginBtn = async () => {
            await loginApi(user)
            await replace('/')
        }

        return () => (
            <div class={Css.wrapper}>
                <div class={Css.login}>
                    <Form class={Css.form} wrapperCol={{span: 24}}>
                        <div class={Css.header}>
                            <img src={require('@/assets/logo.png')}/>
                        </div>
                        <Item>
                            <Input placeholder="请输入账号" v-model={[user.user_name, 'value']}
                                   v-slots={{prefix: () => <UserOutlined/>}} size={"large"}/>
                        </Item>
                        <Item>
                            <Password placeholder="请输入密码" v-model={[user.pass_word, 'value']}
                                      v-slots={{prefix: () => <LockOutlined/>}} size={"large"}/>
                        </Item>
                        <Button block type={'primary'} size={"large"} onClick={loginBtn}>登录</Button>
                    </Form>
                </div>
            </div>
        )
    }
})