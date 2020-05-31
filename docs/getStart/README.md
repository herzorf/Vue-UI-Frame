# 快速上手

用前须知：

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;本组件使用的是IE8及以上浏览器支持的border-box样式，请在css中开启 `*，*::before,*::after{box-sizing:border-box;}`
此样式IE 15以上才支持.

&nbsp;&nbsp;&nbsp;&nbsp;阅读本章节之前请确保你已初始化了一个Vue CLI的脚手架，并且通过`npm install Vue-UI-Frame`或者`yarn add Vue-UI-Frame`安装了本组件库。

&nbsp;&nbsp;&nbsp;&nbsp;引入Vue-UI-Frame
```vuejs
import   {Button,
          ButtonGroup,
          Icon,
          Collapse,
          CollapseItem,
          Vue,
          Input,
          Row,
          Column,
          Layout,
          Sider,
          Header,
          Content,
          Footer,
          Toast,
          plugin,
          Tabs,
          TabsHead,
          TabsBody,
          TabsPane,
          TabsItem,
          Popover}
        from "vue-ui-frame";
Vue.use(plugin);
import "vue-ui-frame/dist/index.css";
export default {
  name: "App",
  components: {
    HelloWorld,
    "g-button": Button,
    "g-Icon": Icon,
    "g-button-group": ButtonGroup,
     ...//这里注册组件
  }
```