import {defineComponent} from 'vue'
import {updateTheme, colorList} from './settingConfig'
import {Select, Tag} from "ant-design-vue";

const {Option} = Select
export default defineComponent(() => {

    const handleChange = (color: string) => updateTheme(color)

    const renderColorList = () => (colorList.map((item) => (<Option value={item.color}>
            <Tag color={item.color}>
                {item.key}
            </Tag>
        </Option>)
    ))

    return () => (<Select onChange={(color: string) => handleChange(color)}>
        {renderColorList()}
    </Select>)
})