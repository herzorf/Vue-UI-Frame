# 这是一个Vue 的 UI组件仓库
#### 作者：何中峰
#### 开始时间：2020/5/9 起
#### 结束时间：2020/6/1 止


## 介绍
这是我在学习Vue框架的时候写的一个Vue的UI框架，希望你能喜欢
## 开始使用

1.用前须知：

CSS要求：
    
本组件使用的是IE8及以上浏览器支持的border-box样式，请在css中开启
    ```*，*::before,*::after{box-sizing:border-box;}```
        
此样式IE 15以上才支持

安装：Vue-UI-Frame
```$xslt
npm i --save Vue-UI-Frame
```
引入 Vue-UI-Frame
```
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
     ...
  }
```
## 文档
 https://1446450047.github.io/Vue-UI-Frame/
 
## 提问
## 变更记录
暂无

## 联系方式
联系我：1446450047@qq.com
## 贡献代码
就我一个人
