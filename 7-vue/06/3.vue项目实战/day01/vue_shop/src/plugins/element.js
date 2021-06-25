import Vue from 'vue'
import {
  Button,
  Form,
  FormItem,
  Input,
  Message
} from 'element-ui'

//进行elementui的按需导入
Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
//配置弹窗提示：
Vue.prototype.$message = Message
