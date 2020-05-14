# 这是一个Vue 的 UI组件仓库
[![Build Status](https://travis-ci.org/1446450047/Vue-UI-Frame.svg?branch=master)](https://travis-ci.org/1446450047/Vue-UI-Frame)
#### 作者：何中峰
#### 开始时间：2020/5/9 起
#### 结束时间：暂无


## 介绍
这是我在学习Vue框架的时候写的一个Vue的UI框架，希望你能喜欢
## 开始使用

1.用前须知：

CSS要求：
    
本组件使用的是IE8及以上浏览器支持的border-box样式，请在css中开启
    ```*，*::before,*::after{box-sizing:border-box;}```
    
你还需要设置默认颜色变量（后续会添加）
    
 默认：
  ```
      html {
                --button-height: 32px;
                --font-size: 14px;
                --border-radius: 4px;
                --color: #333;
                --border-color: #999;
                --button-bg: #eee;
                --button-hover-bg: #fff;
                --button-active-bg: #ddd;
            }
 ```
此样式IE 15以上才支持

安装：Vue-UI-Frame
```$xslt
npm i --save Vue-UI-Frame
```
引入 Vue-UI-Frame
```
import { Button, ButtonGroup, Icon } from "vue-ui-frame";
import "vue-ui-frame/dist/index.css";
export default {
  name: "App",
  components: {
    HelloWorld,
    "g-button": Button,
    "g-Icon": Icon,
    "g-button-group": ButtonGroup
  }
```
## 文档

## 提问

## 变更记录

## 联系方式

## 贡献代码
