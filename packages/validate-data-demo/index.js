// 导入组件，组件必须声明 name
import ValidateDataDemo from './src/ValidateDataDemo'
 
// 为组件提供 install 安装方法，供按需引入
ValidateDataDemo.install = function (Vue) {
 Vue.component(ValidateDataDemo.name, ValidateDataDemo)
}
// 默认导出组件
export default ValidateDataDemo