import MjButton from './button.vue'
import MjDialog from './dialog.vue'
import MjInput from './input.vue'
import MjSwitch from './switch.vue'
import MjRadio from './radio.vue'
import MjRadioGroup from './radio-group.vue'
import MjCheckbox from './checkbox.vue'
import MjCheckboxGroup from './checkbox-group.vue'
import MjForm from './form.vue'
import MjFormItem from './form-item.vue'
import './assets/index.scss'

const components = [
  MjButton,
  MjDialog,
  MjInput,
  MjSwitch,
  MjRadio,
  MjRadioGroup,
  MjCheckbox,
  MjCheckboxGroup,
  MjForm,
  MjFormItem
]
// 整个包的入口 ，注册所有组件
const install = function (Vue) {
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}

// 判定是否是直接引入文件(比如script引入，全局能拿到Vue变量)，如果是，就不用调用Vue.use()
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}
export default install
