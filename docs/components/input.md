---
title: input
---

# input 文本框
组件说明：
&nbsp;&nbsp;&nbsp;&nbsp;input组件中可以设置input输入框的输入文本框，禁用文本框，只读文本框，错误文本框
,还可以进行文本框值得双向绑定

样式展示：

<ClientOnly>
<input-demo></input-demo>
</ClientOnly>



使用方法：
```html
    <g-input placeholder="输入文字..."></g-input>
    <g-input value="message" v-model="message"></g-input>
    <g-input placeholder="无法操作的..." disabled></g-input>
    <g-input placeholder="只读的内容..." readonly></g-input>
    <g-input placeholder="输入文字..." error="输入的内容不符合要求"></g-input>
```